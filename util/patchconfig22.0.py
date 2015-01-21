
ORIGDIR = "ff-orig/mozilla-22.0"
DEVDIR = "ff-dev/mozilla-22.0"
PATCHDIR = "patch/mozilla-22.0"
IGNORE_BINARY = True
EXCLUSIONS = [
  '_virtualenv',
  'confdefs.h',
  '*.pytmp',
  'obj-*',
  'dist',
  '*.pyc',
  '*.jar',
  '.hg*',
  '*.so',
  'configure',
  'configure.in',
  '*.a',
  'Linux_All_DBG.OBJ',
  '*.o',
  '*.swp',
  '*.swo',
  'ipc',
  'TestDeadlockDetector*',
  'test_deadlock_detector',
  'idl-parser',
  '.mozconfig*',
  '.project',
  'jprof-log',
  'imacros.c.out*',
  'build-debug',
  'PKG-INFO',
  'mozbase',
  'python',
  'mozinfo.json',
  '*.mk',
  # Below here, we exclude to allow comparison of a compiled js/src
  # directory to an uncompiled one.
  '.deps',
  'system_wrappers_js',
  'Makefile',
  'config.cache',
  'config.log',
  'config.status',
  'host_*',
  'js-conf*',
  '*.a',
  '*.a.desc',
  'nsinstall',
  'expandlibs_config.py',
  'jsapi-tests',
  'jsauto*',
  '*.out.h',
  'unallmakefiles',
  '*gdb.py',
]

