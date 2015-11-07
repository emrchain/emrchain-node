define([
	'backbone',
	'globals',
	'hbs!tmpl/item/get_patient_view_tmpl'
],
function( Backbone, Global, GetPatientViewTmpl  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.LayoutView.extend({

		initialize: function() {
			console.log("initialize a GetPatientViewTmpl ItemView");
		},

    	template: GetPatientViewTmpl,

		/* ui selector cache */
		ui: {
			patientAddress: '#patientAddress',
			getPatientButton: '#get-patient-button',
			messages: '#messages',
			createRecordContent: '#create-record-content'
		},

		/* Ui events hash */
		events: {
			'click @ui.getPatientButton': 'onClickGetPatient'
		},

		/* on render callback */
		onRender: function() {},

		onClickGetPatient: function(e) {
			var self = this;
			var patientAddressVal = this.ui.patientAddress.val();
			$.ajax({
				url: Global.apiBase + '/patient/' + patientAddressVal, // TODO validate for bollox
				type: 'GET',
				contentType: 'application/json; charset=utf-8',
				success: function (response) {
					console.log(response);
					self.model.set({ patientAddress: patientAddressVal });
					self.model.trigger('gotPatient');
				},
				error:function (xhr, ajaxOptions, thrownError){
					if(xhr.status==404) {
						console.log('Patient not found, create a new one.');
						self.model.set({ patientAddress: patientAddressVal });
						self.model.trigger('gotPatient');
					}
					// TODO handle else
				}
			});
		}
	});

});
