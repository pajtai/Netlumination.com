/*global module:false*/
module.exports = function(grunt) {

    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // Project configuration.
    grunt.initConfig({

        useref: {
            // specify which files contain the build blocks
            html: 'temp/**/*.html',
            // explicitly specify the temp directory you are working in
            temp: 'temp'
        },

        shell: {
            rm: {
                command: "rm -rf temp && rm -rf targets/live/site"
            },
            cp: {
                command: "cp -R application temp"
            },

            jekyll: {
                command: "jekyll serve -w",
                options: {
                    stdout: true,
                    stderr: true,
                    execOptions: {
                        cwd: './temp'
                    }
                }
            },

            css: {
                command: "mv temp/css targets/live/site/css",
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
        },

        open : {
            dev : {
                path: 'http://localhost:4000'
            }
        }
    });



    grunt.registerTask('build', ['shell:rm', 'shell:cp', 'useref', 'concat', 'cssmin', 'shell:clean', 'shell:css', 'shell:ref', 'open:dev', 'shell:jekyll']);

    grunt.registerTask('server', ['shell:rm', 'shell:cp', 'useref', 'concat', 'cssmin', 'shell:clean', 'shell:css', 'open:dev', 'shell:jekyll']);
};