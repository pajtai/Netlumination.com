/*global module:false*/
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        cp: {
            temp: {
                src : "application",
                dest:"temp"
            }
        },

        useref: {
            // specify which files contain the build blocks
            html: 'temp/**/*.html',
            // explicitly specify the temp directory you are working in
            temp: 'temp'
        },

        shell: {
            jekyll: {
                command: "jekyll --server temp",
                stdout: true,
                stderr: true,
                execOptions: {
                    cwd: './temp'
                }
            },

            clean: {
                command: "rm buttons.css responsive.min.css styles.css syntax.css",
                stdout: true,
                stderr: true,
                execOptions: {
                    cwd: './temp/css'
                }
            }
        }
    });

    // plugin tasks
    grunt.loadNpmTasks('grunt-useref');
    grunt.loadNpmTasks('grunt-cp');
    grunt.loadNpmTasks('grunt-shell');

    grunt.registerTask('build', 'cp:temp useref concat cssmin shell:clean shell:jekyll');
};