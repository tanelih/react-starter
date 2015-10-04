#!/usr/bin/env

mkdir -p dist/client
touch dist/client/app.js
touch dist/client/app.css

lessc --autoprefix="> 5%" \
  src/client/styles/app.less dist/client/app.css

NODE_ENV='production' \
  browserify src/client/scripts/main.js -t babelify -t envify \
    | uglifyjs --compress --mangle --screw-ie8 > dist/client/app.js
