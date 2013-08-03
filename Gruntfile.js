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
                        cwd: './application'
                    }
                }
            },

            jekyllDeploy: {
                command: "jekyll",
                callback: function() {
                    grunt.log.writeln("***** --- *****");
                    grunt.tasks.run('open:dev');
                },
                options: {
                    stdout: true,
                    stderr: true,
                    execOptions: {
                        cwd: './application'
                    }
                }
            }
        },

        build_gh_pages: {
            ghPages: {
                options: {
                    build_branch: "gh-pages",
                    dist: "build"
                }
            }
        },

        jekyll: {
            server : {
                src : 'templates',
                dest: 'dev',
                server : true,
                server_port : 8000,
                auto : true
            },
            dev: {
                src: 'templates',
                dest: 'dev'
            },
            prod: {
                src: 'templates',
                dest: 'prod'
            }
        }
    });

    grunt.registerTask("deploy", "Deploy to gh-pages", ["shell:jekyllDeploy", "build_gh_pages"]);

};