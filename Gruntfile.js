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
                    cname: 'xnetlumination.com'
                }
            }
        },

        jekyll: {
            options: {
                src : 'application',
                dest: 'build'
            },
            build: {
                options: {
                    //baseurl: "http://pajtai.github.io/Netlumination.com/"
                }
            },
            server: {
                options: {
                    config: 'application/_config_server.yml'
                    //baseurl: "http://pajtai.github.io/Netlumination.com/"
                }
            },
            drafts: {
                options: {
                    config: 'application/_config_server.yml',
                    //baseurl: "http://pajtai.github.io/Netlumination.com/"
                    drafts: true
                }
            }
        },

        watch: {
            options: {
                // Start a live reload server on the default port: 35729
                livereload: true,
                spawn: true
            },
            server: {
                tasks: ['jekyll:server'],
                files: ['application/**/*']
            },
            drafts: {
                tasks: ['jekyll:drafts'],
                files: ['application/**/*']
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
    grunt.registerTask('server', 'Deploy website on localhost', ['jekyll:server', 'connect:livereload', 'open:server','watch:server']);
    grunt.registerTask('drafts', 'Deploy website on localhost', ['jekyll:drafts', 'connect:livereload', 'open:server','watch:drafts']);
    grunt.registerTask("deploy", "Deploy to gh-pages", ['jekyll:build', 'build_gh_pages']);

};
