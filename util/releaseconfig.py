import os
import sys

JAMPKG = os.environ['JAMPKG']
sys.path.append(os.path.join(os.environ['JAMPKG'], 'jamscript', 'tests'))
from config import *

OUTDIR = os.path.join(JAMSCRIPTDIR, "..", "jamscript-release")

# The filter specifies a pattern that files must match. If the last
# parameter is True, the match must be at the end of the filename.
# ("/absolute/source/dir", "relative/destination/dir" [,"filter" [,True|False]])
FILES_TO_COPY = [
  (os.path.join(DOCDIR, 'INSTALL.bash'), os.path.join('doc', 'INSTALL.bash')),
  (os.path.join(DOCDIR, 'INSTALL-FREEBSD'), os.path.join('doc', 'INSTALL-FREEBSD')),
  (os.path.join(DOCDIR, 'TRANSACTIONS'), os.path.join('doc', 'TRANSACTIONS')),
  (os.path.join(DOCDIR, 'RUNNING'), os.path.join('doc', 'RUNNING')),
  (TESTDIR, 'tests', '.py', True),
  (TXTESTDIR, os.path.join('tests', 'js')),
  (TXLIB, os.path.join('txjs', 'libTx.js')),
  (PATCHDIR, 'patch'),
  (os.path.join(JAMSCRIPTDIR, 'README'), 'README'),
  (os.path.join(JAMSCRIPTDIR, 'LICENSE'), 'LICENSE'),
]

