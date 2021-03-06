module.exports = config =>
{
	config.set(
	{
		basePath: '',
		frameworks:
		[
			'jasmine',
			'@angular-devkit/build-angular'
		],
		plugins:
		[
			require('karma-jasmine'),
			require('karma-chrome-launcher'),
			require('karma-coverage-istanbul-reporter'),
			require('@angular-devkit/build-angular/plugins/karma')
		],
		client:
		{
			clearContext: false
		},
		coverageIstanbulReporter:
		{
			dir: require('path').join(__dirname, './coverage/ngx-crud-playground'),
			reports:
			[
				'text-summary'
			],
			fixWebpackSourcePaths: true
		},
		reporters:
		[
			'progress'
		],
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: true,
		browsers:
		[
			'ChromeHeadless'
		],
		singleRun: true,
		restartOnFileChange: true
	});
};
