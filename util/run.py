#!/usr/bin/python
import sys
import os
import subprocess
from subprocess import PIPE
import time
from optparse import OptionParser
import tempfile

JAMPKG = os.environ['JAMPKG']
sys.path.append(os.path.join(os.environ['JAMPKG'], 'util'))
from config import *
from util import err
from util import run_tx
from util import load_policies
from util import validate_output

def load_testcases(from_dir, default_policy=None, filter=None):
  cases = []
  fls = os.listdir(from_dir)
  # Sort the files so that tests are run in a consistent order.
  fls.sort()
  for flname in fls:
    # Skip files that aren't suffixed with .js.
    flparts = os.path.splitext(flname)
    if flparts[1] != '.js':
      continue
    # Skip non-testcase files
    expparts = os.path.splitext(flparts[0])
    if expparts[1] == '.exp':
      continue
    if expparts[1] == '.policy':
      continue

    base = flparts[0]
    if filter is not None and base != filter:
      continue

    # Find any applicable policy files.
    policies = load_policies(from_dir, base, '.policy.js').values()

    # Some cases have a modified version with a "-bad"
    # or "-ok" suffix. These can use the same policy as
    # the non-modified version.
    if len(policies) == 0:
      subparts = base.split('-')
      if subparts[-1] == 'bad' or subparts[-1] == 'ok':
        base = '-'.join(subparts[:-1])
        policies = load_policies(from_dir, base).values()
        
    # Default to the simple policy.
    if len(policies) == 0:
      if default_policy is not None:
        polpath = os.path.join(from_dir, default_policy)
        if not os.path.isfile(polpath):
          err("Unable to find default policy file for %s: %s" % (flname, polpath))
        else:
          policies = [polpath]

    flpath = os.path.join(from_dir, flname)
    specs = (flpath, policies)
    cases.append(specs)

  return cases
      
def run_tx_tests(case=None, debug=False, jscmd=JS_COMMAND, moreopts=[]):
  tot = 0
  tot_ok = 0
  start = time.time()

  testcases = load_testcases(JAMSCRIPT_TESTDIR, None, filter=case)

  for inps in testcases:
    tot += 1
    outp = run_tx(inps[0], inps[1], perf=debug, debug=debug, jscmd=jscmd)
    stat = validate_output(inps[0], outp, '.exp')
    if stat == 'ok':
      tot_ok += 1
    jsname = os.path.basename(inps[0])

    if debug:
      print outp
    if debug or stat != 'ok':
      print jsname, stat

  end = time.time()
  tottime = end - start

  print tot_ok, "of", tot, "transaction tests successful;", str(tottime) + "s"
  print

def main():
  parser = OptionParser(usage="%prog")
  parser.add_option('-g', '--debug', action='store_true', default=False, dest='debug', help='generate debug output')
  parser.add_option('-d', '--builddir', action='store', default=None, dest='builddir', help='build directory to test')
  parser.add_option('-a', '--always-mjit', action='store_true', default=False, dest='alwaysmjit', help='always use method JIT')
  parser.add_option('-m', '--methodjit', action='store_true', default=False, dest='methodjit', help='enable method JIT')
  parser.add_option('-t', '--typeinfer', action='store_true', default=False, dest='typeinfer', help='enable type inference')

  opts, args = parser.parse_args()
    
  if len(args) > 0:
    testcase = args[0]
  else:
    testcase = None

  moreopts = []
  if opts.alwaysmjit:
    moreopts.append('-a')
  if opts.methodjit:
    moreopts.append('-m')
  if opts.typeinfer:
    moreopts.append('-t')

  if opts.builddir is not None:
    global JAMSCRIPT_BUILDDIR, JS_COMMAND
    JAMSCRIPT_BUILDDIR = opts.builddir
    JS_COMMAND = os.path.join(JSBUILDDIR, 'dist', 'bin', 'js')

  run_tx_tests(case=testcase, debug=opts.debug, jscmd=JS_COMMAND, moreopts=moreopts)


if __name__ == "__main__":
  main()

