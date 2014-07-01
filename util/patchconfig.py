
ORIGDIR = "mozilla-esr17-orig"
DEVDIR = "mozilla-esr17"
PATCHDIR = "patch"
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
]

