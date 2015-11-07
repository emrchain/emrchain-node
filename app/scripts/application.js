define([
		'backbone',
		'communicator',
		'jquery.spin',
		'views/layout/app_container'
	],

	function( Backbone, Communicator, Spinner, AppLayout ) {
		'use strict';

		var App = new Backbone.Marionette.Application();

		/* Add application regions here */
		App.addRegions({
			appRegion: '#AppContainer'
		});

		/* Add initializers here */
		App.addInitializer( function () {

			var layout = new AppLayout();
			App.appRegion.show(layout);

			$("#loading").spin({left: '58%'}).hide();
			$(document).ajaxStart(function(){ $("#loading").fadeIn(); });
			$(document).ajaxComplete(function(){ $("#loading").fadeOut(); });

			Communicator.mediator.trigger("APP:START");
		});

		return App;
	});
