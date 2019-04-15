# Bootstrap 4 study

## Files in this Repo
- quick-prototyping.html is the quick and dirty basic bootstrap start-up html. includes all the code - so not for production
- index.html is the tutorial html, created based on installation via npm
- package-lock.json, package.json, node_modules - created during the npm installation process

## node_modules installed

### dev dependencies
- gulp - javascript task runner
- browser-sync - automatically refreshes browser upon file changes(saves)
- gulp-sass - enables sass compiling with the project

### production dependencies
- bootstrap - duh
- jquery - chainable js methods
- popper.js - positioning of pop-overs & tooltips (replaces tether)

## setting up boilerplate

- tutorial was using gulp 3.9 - gulp 4 had to make changes in gulpfile.js
  - which uses gulp.parallel & gulp.series not what is in the tutorial
  - must ```npm i -g gulp-cli``` at root directory to run gulp at command line
  - I'm using nvm and it still works, though global is only for node 10.x instance

