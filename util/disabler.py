#!/usr/bin/python
import sys
import os
import re
import subprocess
from subprocess import PIPE
import shutil
import time
import imp
from optparse import OptionParser
import tempfile
import filecmp

def convertInplace(inpfl):
  pass

# Disable introspect blocks in a "transformed" JAMScript file.
def convert(inpfl, outfl):
  isOpen = False
  indent = -1
  cnt = 0
  for ln in inpfl.readlines():
    if ln.strip().startswith("introspect("):
      indent = len(ln.lstrip()) - len(ln)
      ln = "//" + ln
      if isOpen:
        print >> sys.stderr, "Line " + str(cnt) + ": introspect block already open"
      isOpen = True
    elif isOpen and ln.strip() == "}":
      ind = len(ln.lstrip()) - len(ln)
      if ind == indent:
        ln = "//" + ln
        isOpen = False

    cnt += 1
    print >> outfl, ln,

  inpfl.close()
  outfl.close()

def main():
  parser = OptionParser(usage="%prog input.js output.js")
  parser.add_option('-i', '--inplace', action='store_true', default=False, dest='inplace', help='overwrite existing file')
  parser.add_option('-v', '--verbose', action='store_true', default=False, dest='verbose', help='generate verbose output')

  opts, args = parser.parse_args()

  if len(args) < 1:
    if opts.inplace:
      parser.error("No input file for in-place modification")
    inpfl = sys.stdin
  else:
    if not os.path.isfile(args[0]):
      parser.error("Input file not found: %s" % args[0])
    inpfl = open(args[0], 'r')

  if len(args) < 2:
    if not opts.inplace:
      outfl = sys.stdout
  else:
    outfl = open(args[1], 'w')

  if opts.inplace:
    convertInplace(inpfl)
  else:
    convert(inpfl, outfl)

if __name__ == "__main__":
  main()
