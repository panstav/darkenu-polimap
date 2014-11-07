module.exports = function(grunt) {

	grunt.initConfig(
		{
			pkg: grunt.file.readJSON('package.json'),

			sass: {
				pretty: {
					options: {
						precision: 3,
						noCache: true,
						trace: true
					},
					files: {
						'css/style.css': 'css/global.sass'
					}
				},
				ugly: {
					options: {
						style: 'compressed',
						precision: 3,
						noCache: true,
						trace: true
					},
					files: {
						'css/style.min.css': 'css/global.sass'
					}
				}
			},
			uglify: {
				polimap: {
					options: {
						mangle: {
							except: ['jQuery']
						}
					},
					files: {
						'js/polimap.min.js': ['js/polimap.js']
					}
				}
			}

		}
	);

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('build', ['sass:ugly', 'uglify:polimap']);

};