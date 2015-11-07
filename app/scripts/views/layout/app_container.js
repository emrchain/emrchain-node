define([
		'backbone',
		'backbone.marionette',
		'globals',
		'hbs!tmpl/layout/app_container_tmpl'
	],
	function( Backbone, Marionette, Globals, AppContainerTmpl ) {
		'use strict';

		/* Return a Layout class definition */
		return Backbone.Marionette.LayoutView.extend({
			tagName: 'div',
			id: 'AppLayoutView',

			initialize: function() {
				this.initRouter();
			},

			template: AppContainerTmpl,

			regions: {
				'contentRegion' : '#ContentRegion'
			},

			ui: {
				'navBlah': '#nav-blah'
			},

			events: {
				'click #nav-blah' : 'onNavBlahClicked'
			},

			onRender: function() {
				if( ! Backbone.History.started) Backbone.history.start();
			},

			initRouter: function() {
				// cache reference to 'this' in the module scope
				var capturedThis = this;

				var appRouteHandler = {
					'' : 'onBlahRoute'
				};

				var appRouterController = {
					onBlahRoute: function() {
						capturedThis.onBlahNavigated();
					}
				};

				// define an AppRouter constructor
				var router = Marionette.AppRouter.extend({});

				// create a new instance of the AppRouter
				// and assign the routes and controller
				var appRouter = new router({
					appRoutes: appRouteHandler,
					controller: appRouterController
				});
			},

			onBlahNavigated: function() {
				//var registrationView = new RegistrationView({ coluApiKey: Globals.coluApiKey });
				//this.contentRegion.show(registrationView);

				this.$el.find('.navButton.active').removeClass('active');
				this.ui.navBlah.addClass('active');
			}
		});

	});
