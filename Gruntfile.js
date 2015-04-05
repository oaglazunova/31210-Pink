module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    less: {
      style: {
        files: {
          'css/style.css': ['less/style.less']
        }
      }
    },

	sprite:{
      all: {
        src: 'img/sprites-source/*.svg',
        dest: 'img/spritesheet.svg',
        destCss: 'img/sprites-source/sprites.css'
      }
    },
	
	csscomb: {
        options: {
            // Task-specific options go here. 
        },
        your_target: {
            // Target-specific file lists and/or options go here. 
			'css/style.css': ['css/style.css'],
        },
    },

    autoprefixer: {
      options: {
        browsers: ['last 2 versions']
      },
      style: {
        src: 'css/style.css'
      }
    },

    cmq: {
      style: {
        files: {
          'css/style.css': ['css/style.css']
        }
      }
    },

    watch: {
      style: {
        files: ['less/**/*.less'],
        tasks: ['style'],
        options: {
          spawn: false,
          livereload: true
        },
      },
      html: {
        files: ['*.html'],
        options: {
          spawn: false,
          livereload: true
        },
      },
    }

  });

  grunt.registerTask('default', [
    'less',
    'autoprefixer',
    'cmq',
    'watch'
  ]);

	// Load in `grunt-spritesmith`
  grunt.loadNpmTasks('grunt-spritesmith');  
  //Run the 'grunt sprite' task
  grunt.loadNpmTasks('grunt-csscomb');

  grunt.registerTask('style', [
    'less',
    'autoprefixer',
    'cmq',
  ]);

};