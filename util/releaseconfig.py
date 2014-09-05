import os
import sys

JAMPKG = os.environ['JAMPKG']
sys.path.append(os.path.join(os.environ['JAMPKG'], 'util'))
from config import *

OUTDIR = os.path.join(JAMSCRIPT_DIR, "..", "jamscript-release")

# The filter specifies a pattern that files must match. If the last
# parameter is True, the match must be at the end of the filename.
# ("/absolute/source/dir", "relative/destination/dir" [,"filter" [,True|False]])
FILES_TO_COPY = [
  (os.path.join(JAMSCRIPT_DOCDIR, 'INSTALL.bash'), os.path.join('doc', 'INSTALL.bash')),
  (os.path.join(JAMSCRIPT_DOCDIR, 'INSTALL-FREEBSD'), os.path.join('doc', 'INSTALL-FREEBSD')),
  (os.path.join(JAMSCRIPT_DOCDIR, 'TRANSACTIONS'), os.path.join('doc', 'TRANSACTIONS')),
  (os.path.join(JAMSCRIPT_DOCDIR, 'RUNNING'), os.path.join('doc', 'RUNNING')),
  (os.path.join(JAMSCRIPT_DIR, 'tests'), 'tests', '.py', True),
  (JAMSCRIPT_TESTDIR, os.path.join('tests', 'js')),
  (JAMSCRIPT_LIB, os.path.join('txjs', 'libTx.js')),
  (os.path.join(JAMSCRIPT_DIR, 'patch'), 'patch'),
  (os.path.join(JAMSCRIPT_DIR, 'README'), 'README'),
  (os.path.join(JAMSCRIPT_DIR, 'LICENSE'), 'LICENSE'),
]

