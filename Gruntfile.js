/*global module:false*/
module.exports = function(grunt) {

    'user strict';

    var port = 8000;

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

        build_gh_pages: {
            ghPages: {
                options: {
                    build_branch: "gh-pages",
                    dist: "build"
                }
            }
        },

        jekyll: {
            options: {
                src : 'application',
                dest: 'build',
                auto : true
            },
            server : {
                options: {
                    server : true,
                    watch: true,
                    server_port : port
                }
            },
            build: { }
        },

        open: {
            server: {
                path: 'http://localhost:' + port
            }
        }
    });

    grunt.registerTask("kickoff", function() {
       grunt.util.spawn("grunt", ["jekyll:server"]);
    });
    grunt.registerTask('server', 'Deploy website on localhost', ['open:server', 'jekyll:server']);
    grunt.registerTask("deploy", "Deploy to gh-pages", ['jekyll:build', 'build_gh_pages']);

};