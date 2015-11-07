define([
		'backbone',
		'backbone.marionette',
		'globals',
		'hbs!tmpl/layout/app_container_tmpl',
		'views/item/doctor_view',
		'views/item/patient_view',
		'views/item/get_patient_view',
		'views/collection/mrecords_view'
	],
	function( Backbone, Marionette, Globals, AppContainerTmpl, DoctorView, PatientView,
			  GetPatientView, MRecordsView ) {
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
				'navDoctors': '#nav-doctors',
				'navPatients': '#nav-patients',
				'navCreateRecords': '#nav-create-records',
				'navLookupHistory': '#nav-lookup-history'
			},

			events: {
				'click #nav-doctors' : 'onNavDoctorsClicked',
				'click #nav-patients' : 'onNavPatientsClicked',
				'click #nav-create-records' : 'onNavCreateRecordsClicked',
				'click #nav-lookup-history' : 'onNavLookupHistoryClicked'
			},

			onRender: function() {
				if( ! Backbone.History.started) Backbone.history.start();
			},

			initRouter: function() {
				// cache reference to 'this' in the module scope
				var capturedThis = this;

				var appRouteHandler = {
					'' : 'onCreateRecordsRoute',
					'doctors' : 'onDoctorsRoute',
					'patients' : 'onPatientsRoute',
					'create-records' : 'onCreateRecordsRoute',
					'lookup-history' : 'onLookupHistoryRoute'
				};

				var appRouterController = {
					onDoctorsRoute: function() {
						capturedThis.onDoctorsNavigated();
					},
					onPatientsRoute: function() {
						capturedThis.onPatientsNavigated();
					},
					onCreateRecordsRoute: function() {
						capturedThis.onCreateRecordsNavigated();
					},
					onLookupHistoryRoute: function() {
						capturedThis.onLookupHistoryNavigated();
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

			onDoctorsNavigated: function() {
				var doctorView = new DoctorView();
				this.contentRegion.show(doctorView);

				this.$el.find('.navButton.active').removeClass('active');
				this.ui.navDoctors.addClass('active');
			},
			onPatientsNavigated: function() {
				var patientView = new PatientView();
				this.contentRegion.show(patientView);

				this.$el.find('.navButton.active').removeClass('active');
				this.ui.navPatients.addClass('active');
			},
			onCreateRecordsNavigated: function() {
				var getPatientView = new GetPatientView();
				this.contentRegion.show(getPatientView);

				this.$el.find('.navButton.active').removeClass('active');
				this.ui.navCreateRecords.addClass('active');
			},
			onLookupHistoryNavigated: function() {
				var mRecordsView = new MRecordsView();
				this.contentRegion.show(mRecordsView);

				this.$el.find('.navButton.active').removeClass('active');
				this.ui.navLookupHistory.addClass('active');
			}
		});

	});
