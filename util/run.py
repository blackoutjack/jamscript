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
from util import out
from util import err
from util import warn
from util import fatal
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

    # Find an applicable policy file.
    polfile = "%s.policy.js" % base
    polpath = os.path.join(from_dir, polfile)
    policies = []
    if os.path.isfile(polpath):
      policies.append(polpath)

    flpath = os.path.join(from_dir, flname)
    specs = (flpath, policies)
    cases.append(specs)

  return cases
# /load_testcases
      
def run_tx_tests(case=None, debug=False, jscmd=JS_COMMAND, moreopts=[]):
  tot = 0
  tot_ok = 0
  start = time.time()

  testcases = load_testcases(JAMSCRIPT_TESTDIR, None, filter=case)

  for inps in testcases:
    tot += 1
    jspath = inps[0]
    policies = inps[1]
    outp = run_tx(jspath, policies, perf=debug, debug=debug, jscmd=jscmd)
    exppath = os.path.splitext(jspath)[0] + '.exp'
    stat = validate_output(outp, exppath)
    if stat == 'match':
      tot_ok += 1
    jsname = os.path.basename(jspath)

    if debug:
      sys.stdout.write(outp)
    if debug or stat != 'match':
      out('%s %s' % (jsname, stat))

  end = time.time()
  tottime = end - start

  vals = (tot_ok, tot, tottime)
  out('%d of %d transaction tests successful; %.2fs\n' % vals)
# /run_tx_tests

def main():
  parser = OptionParser(usage="%prog")
  parser.add_option('-g', '--debug', action='store_true', default=False, dest='debug', help='generate debug output')
  parser.add_option('-j', '--jsbin', action='store', default=None, dest='jsbin', help='js binary to test')
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

  if opts.jsbin is not None:
    global JS_COMMAND
    JS_COMMAND = opts.jsbin

  run_tx_tests(case=testcase, debug=opts.debug, jscmd=JS_COMMAND, moreopts=moreopts)


if __name__ == "__main__":
  main()

