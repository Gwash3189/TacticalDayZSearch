module.exports = function (grunt) {

    // load the task 
    grunt.loadNpmTasks("grunt-typescript");
    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-karma');

    // Configure grunt here

    grunt.initConfig({
        ts: {
            base: {
                src: ['app/_app.ts', 'app/src/**/*.ts'],
                out: 'production/app.js',
                reference: 'app/_app.ts',
                options: {
                    target: 'es5',
                    sourcemap: false
                }
            },
            unit: {
                src: ['tests/unit/**/*.spec.ts'],
                out: 'tests/unit/tests.js',
                options: {
                    target: 'es5', //IE 9 or greater
                    sourcemap: true
                }
            }
        },
        watch: {
            ts: {
                files: 'app/**/*.ts',
                tasks: ['ts', 'karma'],
                options: {
                    interrupt: true
                }
            },
            tests: {
                files: 'tests/**/*.ts',
                tasks: ['ts', 'karma'],
                options: {
                    interrupt: true
                }
            },
            css: {
                files: 'app/style/**/*.css',
                tasks: ['concat:css']
            },
            copyRegion: {
                files: 'app/src/Region/**',
                tasks: ['copy:regions']
            },
            copyTemplates: {
                files: 'app/src/Template/**',
                tasks: ['copy:templates']
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
        },
        copy: {
            regions: {
                src: '**',
                dest: 'production/Region/',
                cwd: "app/src/Region/",
                expand: true
            },
            templates: {
                src: '*.html',
                dest: 'production/Template/',
                cwd: 'app/src/Template',
                expand: true
            }
        }
    });
};