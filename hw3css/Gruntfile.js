module.exports = function (grunt) {
    // config
    grunt.initConfig({

        concat: {
            options: {
                stripBanners: true,
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                    '<%= grunt.template.today("yyyy-mm-dd") %> */'
            },
            css: {},
            js: {},
            separator: ';'

        }
    });

    // load task
    require('load-grunt-tasks')(grunt);

    // define task
    //grunt.loadNpmTasks('grunt-task');
    grunt.registerTask('default', ['concat'])
}

//config
//
/*
 pkg: grunt.file.readJSON('package.json'),
 task: {
 options: {
 // general options go here
 },
 targetName1: {
 // targetName1 specific
 },
 targetName2: { ... }
 });
 })
 grunt.loadNpmTasks('grunt-task');
 grunt.registerTask('default', ['task'])
 */
