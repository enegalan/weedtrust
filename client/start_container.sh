#!/bin/bash

cd /var/www/html/

npm install -g cordova ionic
npm install -g bower
npm install -g gulp

npm install --verbose

ionic serve 8100 --address 0.0.0.0