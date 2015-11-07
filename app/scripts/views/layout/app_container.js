define([
		'backbone',
		'backbone.marionette',
		'globals',
		'hbs!tmpl/layout/app_container_tmpl',
		'views/item/doctor_view',
		'views/item/patient_view',
		'views/item/mrecord_view',
		'views/collection/mrecords_view',
		'models/patient',
		'models/doctor',
		'models/mrecord'
	],
	function( Backbone, Marionette, Globals, AppContainerTmpl, DoctorView, PatientView,
			  MRecordView, MRecordsView, PatientModel, DoctorModel, MRecordModel ) {
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
				var doctor = new DoctorModel();
				var doctorView = new DoctorView({ model: doctor });
				this.contentRegion.show(doctorView);

				this.$el.find('.navButton.active').removeClass('active');
				this.ui.navDoctors.addClass('active');
			},
			onPatientsNavigated: function() {
				var patient = new PatientModel();
				var patientView = new PatientView({ model: patient });
				this.contentRegion.show(patientView);

				this.$el.find('.navButton.active').removeClass('active');
				this.ui.navPatients.addClass('active');
			},
			onCreateRecordsNavigated: function() {
				var mrecord = new MRecordModel();
				var mRecordView = new MRecordView({ model: mrecord });
				this.contentRegion.show(mRecordView);

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
