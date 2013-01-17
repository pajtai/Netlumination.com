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

        // useref 0.0.9 worked
        useref: {
            // specify which files contain the build blocks
            html: 'temp/**/*.html',
            // explicitly specify the temp directory you are working in
            temp: 'temp'
        },

        shell: {
            jekyll: {
                command: "jekyll --server",
                stdout: true,
                stderr: true,
                execOptions: {
                    cwd: './temp'
                }
            },

            css: {
                command: "rm -rf targets/live/cdn/css && mv temp/css targets/live/cdn/",
                stdout: true,
                stderr: true
            },

            ref: {
                command: 'find . -type f -print0 | xargs -0 -n 1 sed -i -e \'s/rel="stylesheet" href="\\/css/rel="stylesheet" href="http:\\/\\/img\\.netlumination\\.com\\/css/g\'',
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

    grunt.registerTask('build', 'cp:temp useref concat cssmin shell:clean shell:css shell:ref shell:jekyll');
};