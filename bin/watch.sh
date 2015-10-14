#!/usr/bin/env

watch "lessc --autoprefix='> 5%' \
  --source-map-less-inline --source-map-map-inline \
  src/client/styles/app.less dist/client/app.css" src/client/styles &

NODE_ENV='development' \
  watchify src/client/scripts/main.js -dv \
    -t babelify -t envify -o dist/client/app.js &

NODE_ENV='development' nodemon --watch src/server index.js
