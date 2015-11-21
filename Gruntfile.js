module.exports = function(grunt) {
	grunt.initConfig({
		watch: {
			default: {
				options: {
					livreload: 29929
				},
				files: ["_site/*.html","_site/css/*.css","_site/js/*.js"]
			},
			dev: {
				files: ['js/_es6/*.js'],
				tasks: 'babel:dev'
			}
		},
		copy: {
			main: {
				files: {
					'js/lib/jquery.min.js' : 'node_modules/jquery/dist/jquery.min.js'
				}
			}
		},
		babel: {
			dev: {
				options:{
					sourceMap: 'linked',
					presets: ['es2015']
				},
				files: [{
					expand: true,
					cwd: './js/_es6',
					src: ['*.js'],
					dest: './js/',
					ext: '.js'
				}]
			},
			build: {
				options:{
					sourceMap: false,
					presets: ['es2015']
				},
				files: [{
					expand: true,
					cwd: './js/',
					src: ['**/*.js'],
					dest: './_site/js/',
					ext: '.js'
				}]
			}
		},
		uglify: {
			options: {
				mangle: true,
				compress: true,
				sourceMap: false
			},
			build: {
				files: {
					'_site/js/init.min.js':'_site/js/init.js'
				}
			}
		}
	})

	grunt.loadNpmTasks('grunt-contrib-copy')
	grunt.loadNpmTasks('grunt-contrib-watch')
	grunt.loadNpmTasks('grunt-babel')
	grunt.loadNpmTasks('grunt-contrib-uglify')

	grunt.registerTask("default", ['copy:main','watch:dev'])
	grunt.registerTask('build', ['babel:build','uglify:build'])
}