var shim = require('browserify-shim');

module.exports = function (grunt) {
  // Load all NPM grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({

    browserify: {
      options: {
        shim: {
          'vendor': {
            path: 'vendor/vendor.js',
            exports: 'vendor'
          }
        }
      },
      app: {
        src: ['app/app.js'],
        dest: 'dist/app.js',
        options: {
          debug: true,
          // Allow scripts to access `process`, etc.
          // https://github.com/substack/node-browserify#btransformtr
          insertGlobals: true
          // Currently not working:
          // https://github.com/jmreidy/grunt-browserify/issues/73
        }
      }
    },

  });
  
  grunt.registerTask('default', 'browserify')
};