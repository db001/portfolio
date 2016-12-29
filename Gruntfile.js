module.exports = function(grunt) {
  grunt.initConfig({

    watch: {
      sass: {
        files: "app/scss/*.scss",
        tasks: ['sass']
      }
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
            "*.html"
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
  grunt.registerTask('default', ['sass', 'browserSync', 'watch']);
};

// browserSync localhost:3000
