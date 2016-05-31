'use strict'

module.exports = function(grunt){
    require('load-grunt-tasks')(grunt);
    var config = {
        app:'app',
        dist:'dist'
    }
    grunt.initConfig({
        config:config,
        copy:{
            html:{
                src:'./app/index.html',
                dest:'./dist/index.html'
            },
            js:{
                src:'./app/index.js',
                dest:'./dist/index.js'
            }
        },
        clean:{
            dist:{
               src:['./dist/index.html','./dist/index.js']
            }
        }
    });
}