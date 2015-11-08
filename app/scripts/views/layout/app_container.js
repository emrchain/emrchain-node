define([
		'backbone',
		'backbone.marionette',
		'globals',
		'hbs!tmpl/layout/app_container_tmpl',
		'views/item/doctor_view',
		'views/item/patient_view',
		'views/item/get_patient_view',
		'views/item/mrecord_view',
		'views/item/mrecord_history_view',
		'views/collection/mrecords_view',
		'models/mrecord'
	],
	function( Backbone, Marionette, Globals, AppContainerTmpl, DoctorView, PatientView,
			  GetPatientView, MRecordView, MRecordHistoryView, MRecordsView, MRecordModel ) {
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
					'lookup-history' : 'onLookupHistoryRoute',
					'record/:id': 'onLookupRecordRoute'
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
					},
					onLookupRecordRoute: function(id) {
						capturedThis.onLookupRecordNavigated(id);
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
				var model = new MRecordModel();
				model.set({ title: "Create a Medical Record" });
				var self = this;
				model.on('gotPatient', function() {self.onCreatePatientRecord(model)});
				var getPatientView = new GetPatientView({model: model});
				this.contentRegion.show(getPatientView);

				this.$el.find('.navButton.active').removeClass('active');
				this.ui.navCreateRecords.addClass('active');
			},
			onLookupHistoryNavigated: function() {
				var model = new MRecordModel();
				model.set({ title: "Lookup Patient History" });
				var self = this;
				model.on('gotPatient', function() {self.onListPatientRecords(model)});
				var getPatientView = new GetPatientView({model: model});
				this.contentRegion.show(getPatientView);

				this.$el.find('.navButton.active').removeClass('active');
				this.ui.navLookupHistory.addClass('active');
			},
			onCreatePatientRecord: function(model) {
				var view = new MRecordView({ model: model});
				this.contentRegion.show(view);
			},
			onListPatientRecords: function(model) {
				console.log(model);
				if(model.attributes.metadata) {
					var view = new MRecordsView({model: model});
					this.contentRegion.show(view);
				}
			},
			onLookupRecordNavigated: function(assetId) {
				var self = this;
				$.ajax({
					url: Globals.apiBase + '/record?assetId=' + assetId,
					type: 'GET',
					contentType: 'application/json; charset=utf-8',
					success: function (response) {
						console.log(response);
						var model = new MRecordModel({
							patientAddress: response.record.medicalRecord.userData.patientId,
							dateOfBirth: response.record.medicalRecord.userData.dateOfBirth,
							gender: response.record.medicalRecord.userData.gender,
							patientBloodType: response.record.medicalRecord.userData.patientBloodType,
							medicalActionsTaken: response.record.medicalRecord.userData.medicalActionsTaken,
							metadata: response.record.userData
						});
						var view = new MRecordHistoryView({ model: model});
						self.contentRegion.show(view);
					}
				});
			}
		});

	});
