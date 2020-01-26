module.exports = function(grunt) {
    var mozjpeg = require('imagemin-mozjpeg');
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        imagemin: {
            dynamic: {
                options: {
                    svgoPlugins: [{ removeViewBox: false }],
                    use: [mozjpeg({quality:75})]
                },
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['**/*.{png,jpg,gif,svg}'],
                    dest: 'dist/'
                }]
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.registerTask('default', ['imagemin']);
};
