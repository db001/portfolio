module.exports = function(grunt) {
  grunt.initConfig({

    watch: {
      sass: {
        files: "scss/*.scss",
        tasks: ['sass']
      },
      scripts: {
        files: ['app/**/*.js'],
        tasks: ['eslint'],
        options: {
          spawn: false
        },
      },
    },

    eslint: {
      options: {
        configFile: 'eslint.json'
      },
      target: ['scripts/custom.js']
    },

    sass: {
      dist: {
        options: {
          sourcemap: 'none'
        },
        files: {
          // destination          // source file
          "css/styles.css" : "scss/styles.scss"
        }
      }
    },

    browserSync: {
      default_options: {
        bsFiles: {
          src: [
            "css/*.css",
            "*.html",
            "scripts/*.js"
          ]
        },
        options: {
          watchTask: true,
          server: {
            baseDir: "./"
          }
        }        
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.registerTask('default', ['eslint', 'sass', 'browserSync', 'watch']);
};

// browserSync localhost:3000
