/*global module:false*/
module.exports = function(grunt) {

    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // Project configuration.
    grunt.initConfig({

        useref: {
            // specify which files contain the build blocks
            html: 'build/**/*.html',
            // explicitly specify the temp directory you are working in
            temp: 'build'
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
                callback: function() {
                    grunt.log.writeln("***** --- *****");
                    grunt.tasks.run('open:dev');
                },
                options: {
                    stdout: true,
                    stderr: true,
                    execOptions: {
                        cwd: './temp'
                    }
                }
            }
        },

        open : {
            dev : {
                path: 'http://localhost:4000'
            }
        },

        build_gh_pages: {
            ghPages: {
                options: {
                    build_branch: "gh-pages",
                    dist: "build"
                }
            }
        }
    });


    grunt.registerTask("customJekyll", "custom kickoff of Jekyll", function() {

        var jekyll = grunt.util.spawn({
            cmd: 'jekyll',
            args: ["serve", "-w"]
        }, function(error, result, code) {
            return grunt.warn("Error!");
        });



    });

    grunt.registerTask('build', ['shell:rm', 'shell:cp', 'useref', 'concat', 'cssmin', 'shell:clean', 'shell:css', 'shell:ref', 'open:dev', 'shell:jekyll']);

    grunt.registerTask('server', ['shell:rm', 'shell:cp', 'useref', 'concat', 'cssmin', 'shell:clean', 'shell:css', 'customJekyll', 'open:dev']);
};