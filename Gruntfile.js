'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    nodewebkit: {
      options: {
          version: '0.8.6',
          build_dir: './build', 
          keep_nw: true,
          mac: false,
          win: true, 
          linux32: false,
          linux64: true 
      },

      src: ['./**/*']
    }
  });

  grunt.loadNpmTasks('grunt-node-webkit-builder');

  grunt.registerTask('build', ['nodewebkit']);
};