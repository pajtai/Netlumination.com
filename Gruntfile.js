/*global module:false*/
module.exports = function(grunt) {

    'user strict';

    var port = 8000,
        path = require('path'),
        lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet,
        folderMount = function folderMount(connect, point) {
            return connect.static(path.resolve(point));
        };

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
                    dist: "build",
                    cname: "www.netlumination.com"
                }
            }
        },

        jekyll: {
            options: {
                src : 'application',
                dest: 'build'
            },
            server : {
                options: {
                    server : true,
                    server_port : port
                }
            },
            build: {
                options: {
                    base_url: 'http://pajtai.github.io/Netlumination.com/'
                }
            }
        },

        watch: {
            options: {
                // Start a live reload server on the default port: 35729
                livereload: true,
                spawn: true
            },
            spec: {
                files: [
                    'application/**/*'
                ],
                tasks: [
                    'jekyll:build'
                ]
            }
        },

        open: {
            server: {
                path: 'http://localhost:' + port
            }
        },

        connect: {
            livereload : {
                options : {
                    port       : port,
                    hostname: 'localhost',
                    base       : './build/',
                    middleware : function (connect, options) {
                        return [lrSnippet, folderMount(connect, options.base)]
                    }
                }
            }
        },
    });

    grunt.registerTask("kickoff", function() {
       grunt.util.spawn("grunt", ["jekyll:server"]);
    });
    grunt.registerTask('server', 'Deploy website on localhost', ['jekyll:build', 'connect:livereload', 'open:server','watch']);
    grunt.registerTask("deploy", "Deploy to gh-pages", ['jekyll:build', 'build_gh_pages']);

};