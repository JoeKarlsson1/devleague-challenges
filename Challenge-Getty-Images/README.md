# Gulp + SCSS + LiveReload + Babel + Mocha + Chai

This Gist outlines the gulp workflow that will:

1. watch for any scss changes, then compiles scss source into css
2. watch for any changes in the public directory, and trigger live-reload
3. serve static content in `public/`
4. transpile from ES6 to ES5
5. test using Mocha and Chai

This Gist also assumes you already know how to install npm modules, gitignore, create directories and create files via the command line.

---

## globally install npm

First, make sure you have all the required dependencies. If you do not have npm or gulp installed globally, you need to install them. If you already have these installed, skip to the next step.

_to install npm_
`brew install npm`

_to install gulp_
`npm install -g gulp`

---

## set up Gulp + SCSS + LiveReload + Babel + Mocha + Chai for your project

### set up node modules

1. install and save required dependencies:
  - `npm i`

### project directories

- write ES6 code in `src/app.js` and it will be transpiled into ES5 code in `public/dist/app.js`.
- Gulp build files are set up as modules in the `/build` directory.


## workflow

Once gulp sass and livereload are wired up correctly, commit your new files

While you work, make sure to keep your "gulp" terminal running and visible, if your sass source is invalid, it will crash the watching gulp process, and you will want to see the error message that will output in that terminal. Then you can restart your `gulp` watcher after fixing your errors.

Anytime you add new files to your `public/` directory (like images or javascript), you may need to kill then restart your gulp task