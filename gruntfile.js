// This file in the main entry point for defining grunt tasks and using grunt plugins.
// Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409

module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            dev: {
                options: {
                    sourceMap: true,
                    dumpLineNumbers: 'comments',
                    relativeUrls: true,
                    plugins: [
                            new (require('less-plugin-autoprefix'))({ browsers: ["last 2 versions"] })
                    ]
                },
                files: {
                    'wwwroot/lib/bootstrap/bootstrap.css': 'bower_components/bootstrap/less/bootstrap.less',
                }
            },
            production: {
                options: {
                    compress: true,
                    relativeUrls: true,
                    plugins: [
                            new (require('less-plugin-autoprefix'))({ browsers: ["last 2 versions"] })
                    ]
                },
                files: {
                    'wwwroot/lib/bootstrap/bootstrap.min.css': 'bower_components/bootstrap/less/bootstrap.less',
                }
            }
        },        
        bower: {
            install: {
                options: {
                    targetDir: "wwwroot/lib",
                    layout: "byComponent",
                    cleanTargetDir: true
                }
            }
        }
    });

    // This command registers the default task which will install bower packages into wwwroot/lib
    grunt.registerTask("default", ["bower:install"]);
    grunt.registerTask("production", ["less:production"]);
    grunt.registerTask("dev", ["less:dev"]);

    // The following line loads the grunt plugins.
    // This line needs to be at the end of this this file.
    grunt.loadNpmTasks("grunt-bower-task");
    grunt.loadNpmTasks('grunt-contrib-less');
};