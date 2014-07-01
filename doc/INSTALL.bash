#!/bin/bash
# This file can be run as a shell script to obtain, patch and build
# firefox 17.0.3esr with JAMScript modifications.

# Set this to the checked-out repository root.
#JAMSCRIPTPKG=/path/to/jamscript

sudo apt-get -y install pkg-config
sudo apt-get -y install gtk+-2.0
sudo apt-get -y install libdbus-1-dev
sudo apt-get -y install libdbus-glib-1-dev
sudo apt-get -y install yasm
sudo apt-get -y install libasound2-dev
sudo apt-get -y install libcurl4-openssl-dev
sudo apt-get -y install libiw-dev
sudo apt-get -y install mesa-common-dev

if [[ -z "$JAMSCRIPTPKG" || ! -d $JAMSCRIPTPKG ]]; then
  echo "Set the JAMSCRIPTPKG environment variable first."
  exit
fi

#0) Get to the right directory.
cd $JAMSCRIPTPKG

#1) Obtain the Firefox 17.0.3esr source code from the following URL.
wget http://ftp.mozilla.org/pub/mozilla.org/firefox/releases/17.0.3esr/source/firefox-17.0.3esr.source.tar.bz2

#2) Untar the archive. This creates the mozilla-esr17 directory.
tar -xjf firefox-17.0.3esr.source.tar.bz2

#3) Apply all patches.
cat ./patch/*.patch | patch -d mozilla-esr17 -p1

#4) Copy the appropriate mozconfig file. The file mozconfig-release is
#   used for normal operation, mozconfig-debug for a debug build.
cd ./mozilla-esr17/ && cp mozconfig-release .mozconfig

#5) Build the browser (takes ~30 minutes from scratch with the -j4
#   option in .mozconfig).
make -f client.mk build

#6) If built successfully, you can run the browser as follows.
./obj-release/browser/dist/bin/firefox

# You can also find the js shell at the following location. It is good
# for playing around with how transactions behave and is used by the 
# automated test suite found in ./tests/run.py.

# ./obj-release/browser/dist/bin/js 

# The following allow testing with a local web server.
sudo apt-get -y install apache2
sudo apt-get -y install php5
sudo apt-get -y install libapache2-mod-php5

