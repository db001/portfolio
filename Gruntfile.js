module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          // destination          // source file
          "app/css/styles.css" : "app/scss/styles.scss"
        }
      }
    },

    browserSync: {
      default_options: {
        bsFiles: {
          src: [
            "app/css/*.css",
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
  grunt.registerTask('default', ['sass', 'browserSync']);

};

// browserSync localhost:3000
