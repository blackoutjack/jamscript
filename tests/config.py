import sys
import os
import subprocess
from subprocess import PIPE
from optparse import OptionParser
import tempfile

#
# This file contains various values (mostly paths)
# that can be imported into other Python scripts.
#

JAMPKG = os.getenv('JAMPKG')

UTILDIR = os.path.join(JAMPKG, 'tests')
UTILSCRIPT = os.path.join(UTILDIR, 'util.py')

JAMSCRIPTDIR = os.path.join(JAMPKG, 'jamscript')
PATCHDIR = os.path.join(JAMSCRIPTDIR, 'patch')
TESTDIR = os.path.join(JAMSCRIPTDIR, 'tests')
DOCDIR = os.path.join(JAMSCRIPTDIR, 'doc')
SNOTE_DIR = os.path.join(JAMSCRIPTDIR, 'snote')
MWWIDGETS_DIR = os.path.join(JAMSCRIPTDIR, 'mwwidgets')
JSQRCODE_DIR = os.path.join(JAMSCRIPTDIR, 'jsqrcode')
TXLIBDIR = os.path.join(JAMSCRIPTDIR, 'txjs')
TXLIB = os.path.join(TXLIBDIR, 'libTx.js')
TXTESTDIR = os.path.join(TESTDIR, 'js')

# Constants used when running JAMScript tests
JSBUILDDIR = os.path.join(JAMSCRIPTDIR, 'mozilla-esr17', 'obj-release', 'browser')
JSCOMMAND = os.path.join(JSBUILDDIR, 'dist', 'bin', 'js')

# Operating system specific configuration
if os.path.exists('/dev/null'):
	OS = 'Linux'
	DEVNULL = open('/dev/null', 'w')
else:
	OS = 'Windows'
	DEVNULL = open('nul', 'w')
	print >> sys.stderr("JAM is not supported on Windows.")

