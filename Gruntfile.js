module.exports = function(grunt) {
  'use strict';

  require('load-grunt-tasks')(grunt);

  var config = {
    app: 'app',
    dist: 'dist',
    specs: 'test/spec'
  };

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    config: config,

        // Watches files for changes and runs tasks based on the changed files
    watch: {
      js: {
        files: ['<%= config.app %>/scripts/{,*/}*.js'],
        tasks: ['jshint', 'jscs', 'karma'],
        options: {
          livereload: true
        }
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      styles: {
        files: ['<%= config.app %>/styles/{,*/}*.css'],
        tasks: ['newer:copy:styles', 'autoprefixer']
      },
      html: {
        files: ['<%= config.app %>/*.html'],
        options: {
          livereload: true
        }
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= config.app %>/{,*/}*.html'
        ]
      }
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js',
        '<%= config.app %>/scripts/{,*/}*.js',
        '<%= config.specs %>/{,*/}*.js'
      ]
    },

    karma: {
      unit: {
        configFile: 'karma.conf.js'
      }
    },

    jscs: {
        all: {
            files: {
                src: [
                  '<%= config.app %>/scripts/{,*/}*.js',
                  '<%= config.specs %>/{,*/}*.js'
                ]
            }
        }
    },

    connect: {
      options: {
        port: 9000,
        open: true,
        // livereload: 35729,
        // Change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      livereload: {
        options: {
          middleware: function(connect) {
            return [
              connect().use('/bower_components', connect.static('./bower_components')),
              connect.static(config.app)
            ];
          }
        }
      },
    }
  });

  grunt.registerTask('serve', 'start the server and preview your app, --allow-remote for remote access', function (target) {
    if (grunt.option('allow-remote')) {
      grunt.config.set('connect.options.hostname', '0.0.0.0');
    }
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      // 'clean:server',
      // 'wiredep',
      // 'concurrent:server',
      // 'autoprefixer',
      'connect:livereload',
      'watch'
    ]);
  });

  // Default task(s).
  grunt.registerTask('default', ['serve']);
  grunt.registerTask('validate', ['jscs', 'jshint', 'karma']);

};
