module.exports = function (grunt) {

    // load the task 
    grunt.loadNpmTasks("grunt-typescript");
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-karma');

    // Configure grunt here

    grunt.initConfig({
        typescript: {
            base: {
                src: ['app/_app.ts','app/src/**/*.ts'],
                dest: 'production/app.js',
                options: {
                    target: 'es5', //IE 9 or greater
                    sourceMap: false,
                    declaration: false
                }
            },
            unit: {
                src: ['tests/unit/**/*.spec.ts'],
                dest: 'tests/unit/tests.js',
                options: {
                    target: 'es5', //IE 9 or greater
                    sourceMap: true
                }
            }
        },
        watch: {
            ts: {
                files: 'app/**/*.ts',
                tasks: ['typescript', 'karma'],
                options: {
                    interrupt: true
                }
            },
            tests: {
                files: 'tests/**/*.ts',
                tasks: ['typescript','karma'],
                options: {
                    interrupt: true
                }
            },
            css: {
                files: 'app/style/**/*.css',
                tasks: ['conca:css']
            }
        },
        concat: {
            css: {
                src: ['app/style/**/*.css'],
                dest: 'app/production/style.css'
            }
        },
        karma: {
            unit: {
                configFile: 'karma.conf.unit.js'
            }
        }

    });
};