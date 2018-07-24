# standup


git init

git remote add origin https://github.com/dknam/standup.git





E:\002. workspace\standup>npm run build

E:\002. workspace\standup>npm run deploy

standup@0.1.0 deploy E:\002. workspace\standup

gh-pages -d build

Cloning into 'node_modules\gh-pages.cache\github.com!dknam!standup.git'...

fatal: unable to access 'https://github.com/dknam/standup.git/': SSL certificate problem: unable to get local issuer certificate

npm ERR! code ELIFECYCLE

npm ERR! errno 1

npm ERR! standup@0.1.0 deploy: gh-pages -d build

npm ERR! Exit status 1

npm ERR!

npm ERR! Failed at the standup@0.1.0 deploy script.

npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:

npm ERR!     C:\Users\14058daekwan\AppData\Roaming\npm-cache_logs\2018-07-24T11_42_52_480Z-debug.log

E:\002. workspace\standup>git config --global http.sslVerify false









rm -rf node_modules/gh-pages/.cache
