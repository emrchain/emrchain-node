require.config({

	baseUrl: "/scripts",

	/* starting point for application */
	deps: ['backbone.marionette', 'bootstrap', 'main'],


	shim: {
		bootstrap: {
			deps: ['jquery'],
			exports: 'jquery'
		},
		backgrid: {
			deps: ['jquery', 'underscore', 'backbone'],
			exports: 'Backgrid'
		},
		'backbone.paginator': {
			deps: ['jquery', 'underscore', 'backbone'],
			exports: 'backbone.paginator'
		},
		'backgrid.paginator': {
			deps: ['jquery', 'underscore', 'backbone', 'backbone.paginator'],
			exports: 'backgrid.paginator'
		},
		'backgrid-filter': {
			deps: ['jquery', 'underscore', 'backbone', 'backgrid']
		}
	},

	paths: {
		jquery: '../bower_components/jquery/dist/jquery',
		backbone: '../bower_components/backbone/backbone',
		underscore: '../bower_components/underscore/underscore',

		/* alias all marionette libs */
		'backbone.marionette': '../bower_components/backbone.marionette/lib/backbone.marionette',
		'backbone.wreqr': '../bower_components/backbone.wreqr/lib/backbone.wreqr',
		'backbone.babysitter': '../bower_components/backbone.babysitter/lib/backbone.babysitter',

		/* alias the bootstrap js lib */
		bootstrap: 'vendor/bootstrap',

		/* Alias text.js for template loading and shortcut the templates dir to tmpl */
		text: '../bower_components/requirejs-text/text',
		tmpl: "../templates",

		/* handlebars from the require handlerbars plugin below */
		handlebars: '../bower_components/require-handlebars-plugin/Handlebars',

		/* require handlebars plugin - Alex Sexton */
		i18nprecompile: '../bower_components/require-handlebars-plugin/hbs/i18nprecompile',
		json2: '../bower_components/require-handlebars-plugin/hbs/json2',
		hbs: '../bower_components/require-handlebars-plugin/hbs',

		spin: '../bower_components/spin.js/spin',
		'jquery.spin': '../bower_components/spin.js/jquery.spin',
		backgrid: '../bower_components/backgrid/lib/backgrid',
		'backbone.paginator': '../bower_components/backbone.paginator/lib/backbone.paginator',
		'backgrid.paginator': '../bower_components/backgrid-paginator/backgrid-paginator',
		'backgrid-filter': '../bower_components/backgrid-filter/backgrid-filter',
		moment: '../bower_components/moment/moment'
	},

	hbs: {
		disableI18n: true
	}
});
