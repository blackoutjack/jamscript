#!/bin/bash
# This file can be run as a shell script to obtain, patch and build
# firefox version $VERSION with JAMScript modifications.

# Set this to the checked-out repository root.
#JAMSCRIPTPKG=/path/to/jamscript

VERSION=31.4.0esr

sudo apt-get -y install pkg-config gtk+-2.0 libdbus-1-dev libdbus-glib-1-dev yasm libasound2-dev libcurl4-openssl-dev libiw-dev mesa-common-dev

if [[ -z "$JAMSCRIPTPKG" || ! -d $JAMSCRIPTPKG ]]; then
  echo "Set the JAMSCRIPTPKG environment variable first."
  exit
fi

if [[ ${VERSION%esr} != $VERSION ]]; then
  major=${VERSION%%.*}
  dist=esr$major
else
  dist=release
fi

#0) Get to the right directory.
cd $JAMSCRIPTPKG

#1) Obtain the Firefox source code from the following URL.
wget http://ftp.mozilla.org/pub/mozilla.org/firefox/releases/$VERSION/source/firefox-$VERSION.source.tar.bz2

#2a) Untar the archive. This creates the mozilla-esr17 directory.
tar -xjf firefox-$VERSION.source.tar.bz2

#2b) Move the directory.
mkdir -p ff-dev/ && mv mozilla-$dist ff-dev/mozilla-$VERSION

#3) Apply all patches.
cat ./patch/mozilla-$VERSION/*.patch | patch -d ff-dev/mozilla-$VERSION -p2

#4) Copy the appropriate mozconfig file. The file mozconfig-release is
#   used for normal operation, mozconfig-debug for a debug build.
cd ./ff-dev/mozilla-$VERSION/ && cp mozconfig-release .mozconfig

#5a) On Ubuntu 14.04, I encountered a problem during the virtualenv
#   portion of the build. The following fixes this (you may need to
#   sudo).
# cd /usr/lib/python2.7
# ln -s plat-x86_64-linux-gnu/_sysconfigdata_nd.py .

#5) Build the browser (takes ~70 minutes from scratch with the -j4
#   option in .mozconfig).
./mach build

#6) If built successfully, you can run the browser as follows.
./obj-release/dist/bin/firefox

# You can also find the js shell at the following location. It is good
# for playing around with how transactions behave and is used by the 
# automated test suite found in ./tests/run.py.

# ./obj-release/dist/bin/js 

# The following allow testing with a local web server.
sudo apt-get -y install apache2 php5 libapache2-mod-php5

