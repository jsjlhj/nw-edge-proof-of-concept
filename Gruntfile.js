'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    nodewebkit: {
      options: {
          build_dir: './build', 
          mac: false,
          win: false, 
          linux32: false,
          linux64: true 
      },

      src: ['./**/*']
    }
  });

  grunt.loadNpmTasks('grunt-node-webkit-builder');

  grunt.registerTask('build', ['nodewebkit']);
};


/* var edge = require('edge');

var helloWorld = edge.func(function() {/*
  async (input) => 
  {
    return "Hello " + input.ToString();
  }
*});

helloWorld('World', function(err, result) {
  if(err) { throw err; }
  console.log(result);
});*/