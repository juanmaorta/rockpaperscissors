#!/bin/bash
./node_modules/bower/bin/bower cache clean &&
./node_modules/bower/bin/bower install
./node_modules/grunt-protractor-runner/node_modules/.bin/webdriver-manager update