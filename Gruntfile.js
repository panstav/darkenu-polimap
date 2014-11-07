module.exports = function(grunt) {

	//-=======================================================---
	//------------------ Required modules
	//-=======================================================---

	var extend = require('util')._extend;

	//-=======================================================---
	//------------------ Minify / Concat Pathways
	//-=======================================================---

	var sassPaths = {};
	var minifyPaths = {};

	sassPaths.allPretty = {
		'css/style.css': 'css/global.sass'
	};

	sassPaths.allUgly = {
		'css/style.min.css': 'css/global.sass'
	};

	minifyPaths.allJs = {
		'js/polimap.min.js': ['js/polimap.js']
	};

	//-=======================================================---
	//------------------ Replace Regexps
	//-=======================================================---


	var localPatterns = [];
	var remotePatterns = [];

	// Make sure index.html requests minified scripts & styles
	var addDotMin = {
		match: 'WITHMIN',
		replacement: '.min'
	};
	remotePatterns.push(addDotMin);
	localPatterns.push({ match: addDotMin.match, replacement: '' });

	// Insert Google Analytics script
	var addGoogleAnalytics = {
		match: 'GOOGLEANALYTICS',
		replacement: '<script>(function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,\'script\',\'//www.google-analytics.com/analytics.js\',\'ga\');ga(\'create\', \'UA-44027003-1\', \'panstav.net\');ga(\'send\', \'pageview\');</script>'
	};
	remotePatterns.push(addGoogleAnalytics);
	localPatterns.push({ match: addGoogleAnalytics.match, replacement: '<!-- Google Analytics goes here -->' });

	//-=======================================================---
	//------------------ Grunt Configuration
	//-=======================================================---

	var defaultSassOptions = {
		precision: 3,
		noCache: true,
		trace: true
	};

	grunt.initConfig(
		{
			pkg: grunt.file.readJSON('package.json'),

			sass: {
				allPretty: {
					files: sassPaths.allPretty,
					options: defaultSassOptions
				},
				allUgly: {
					files: sassPaths.allUgly,
					options: extend(defaultSassOptions, {
						style: 'compressed'
					})
				}
			},

			uglify: {
				allJs: {
					files: minifyPaths.allJs,
					options: {
						mangle: {
							except: ['jQuery']
						}
					}
				}
			},

			replace: {
				local: {
					files: {
						'local.html': 'app.html'
					},
					options: {
						patterns: localPatterns
					}
				},

				remote: {
					files: {
						'index.html': 'app.html'
					},
					options: {
						patterns: remotePatterns
					}
				}
			}

		}
	);

	//-=======================================================---
	//------------------ Tasks loader & Build
	//-=======================================================---

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-replace');

	grunt.registerTask('localBuild', ['sass:allPretty', 'replace:local']);
	grunt.registerTask('remoteBuild', ['sass:allUgly', 'uglify:allJs', 'replace:remote']);

};