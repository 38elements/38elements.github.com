module.exports = function(grunt) {
    grunt.initConfig({
      cssmin: {
        dist: {
          files: { 
            'css/common.css': ['css/normalize.css', 'css/pygments.css', 'css/blog.css']
          }
        }
      }
    })
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['cssmin']);
};
