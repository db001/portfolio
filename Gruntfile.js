module.exports = function(grunt) {
  grunt.initConfig({
<<<<<<< HEAD

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
=======
    sass: {
      dist: {
        files: {
          // destination          // source file
          "app/css/styles.css" : "app/scss/styles.scss"
>>>>>>> 5d9eb5bc95a75aff088e53e94007eca41424e9f5
        }
      }
    },

    browserSync: {
      default_options: {
        bsFiles: {
          src: [
<<<<<<< HEAD
            "css/*.css",
=======
            "app/css/*.css",
>>>>>>> 5d9eb5bc95a75aff088e53e94007eca41424e9f5
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
<<<<<<< HEAD
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['sass', 'browserSync', 'watch']);
=======
  grunt.registerTask('default', ['sass', 'browserSync']);
>>>>>>> 5d9eb5bc95a75aff088e53e94007eca41424e9f5

};

// browserSync localhost:3000
