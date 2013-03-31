/*global module:false*/
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        useref: {
            // specify which files contain the build blocks
            html: 'temp/**/*.html',
            // explicitly specify the temp directory you are working in
            temp: 'temp'
        },

        shell: {
            cp: {
                command: "cp -R application temp"
            },

            jekyll: {
                command: "jekyll --server",
                options: {
                    stdout: true,
                    stderr: true,
                    execOptions: {
                        cwd: './temp'
                    }
                }
            },

            css: {
                command: "rm -rf targets/live/cdn/css && mv temp/css targets/live/cdn/",
                options: {
                    stdout: true,
                    stderr: true
                }
            },

            ref: {
                command: 'find . -type f -print0 | xargs -0 -n 1 sed -i -e \'s/rel="stylesheet" href="\\/css/rel="stylesheet" href="http:\\/\\/img\\.netlumination\\.com\\/css/g\'',
                option: {
                    stdout: true,
                    stderr: true,
                    execOptions: {
                        cwd: './temp'
                    }
                }
            },

            clean: {
                command: "rm buttons.css responsive.min.css styles.css syntax.css",
                option: {
                    stdout: true,
                    stderr: true,
                    execOptions: {
                        cwd: './temp/css'
                    }
                }
            }
        }
    });

    // plugin tasks
    grunt.loadNpmTasks('grunt-useref');
    grunt.loadNpmTasks('grunt-cp');
    grunt.loadNpmTasks('grunt-shell');

    grunt.registerTask('build', ['shell:cp', 'useref', 'concat', 'cssmin', 'shell:clean', 'shell:css', 'shell:ref', 'shell:jekyll']);
};