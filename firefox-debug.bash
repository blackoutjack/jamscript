#!/bin/bash

VERSION=31.4.0esr
JAMSCRIPTPKG=$(dirname $0)
OPTIONS="-no-remote"

if [[ "$1" == 'gdb' ]]; then
  gdb --args $JAMSCRIPTPKG/ff-dev/mozilla-$VERSION/obj-debug/dist/bin/firefox $OPTIONS
elif [[ "$1" == 'console' ]]; then
  $JAMSCRIPTPKG/ff-dev/mozilla-$VERSION/obj-debug/dist/bin/firefox $OPTIONS -jsconsole
else
  $JAMSCRIPTPKG/ff-dev/mozilla-$VERSION/obj-debug/dist/bin/firefox $OPTIONS
fi
