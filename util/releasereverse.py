# This configuration copies files from the release directory into the
# development repository. Turns out to be useful when, for example,
# when running experiments in a release setting and making changes on
# the fly.

import os
import sys

JAMPKG = os.environ['JAMPKG']
sys.path.append(os.path.join(os.environ['JAMPKG'], 'jamscript', 'tests'))
from config import *

srcdir = os.path.join(JAMSCRIPTDIR, "..", "jamscript-release")
OUTDIR = JAMSCRIPTDIR

# The filter specifies a pattern that files must match. If the last
# parameter is True, the match must be at the end of the filename.
# ("/absolute/source/dir", "relative/destination/dir" [,"filter" [,True|False]])
FILES_TO_COPY = [
  (os.path.join(srcdir, 'doc', 'INSTALL.bash'), os.path.join('doc', 'INSTALL.bash')),
  (os.path.join(srcdir, 'doc', 'INSTALL-FREEBSD'), os.path.join('doc', 'INSTALL-FREEBSD')),
  (os.path.join(srcdir, 'doc', 'TRANSACTIONS'), os.path.join('doc', 'TRANSACTIONS')),
  (os.path.join(srcdir, 'tests'), 'tests', '.py', True),
  (os.path.join(srcdir, 'tests', 'js'), os.path.join('tests', 'js')),
  (os.path.join(srcdir, 'tests', 'ff'), os.path.join('tests', 'ff')),
  (os.path.join(srcdir, 'txjs', 'libTx.js'), os.path.join('txjs', 'libTx.js')),
  (os.path.join(srcdir, 'patch'), 'patch'),
  (os.path.join(srcdir, 'README'), 'README'),
  (os.path.join(srcdir, 'LICENSE'), 'LICENSE'),
  (os.path.join(srcdir, 'mwwidgets'), 'mwwidgets/'),
  (os.path.join(srcdir, 'jsqrcode'), 'jsqrcode/jam'),
  (os.path.join(srcdir, 'snote'), 'snote/'),
  (os.path.join(srcdir, 'snote', 'SNote/'), os.path.join("snote", "SNote/")),
]


