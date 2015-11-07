define([
	'backbone',
	'globals',
	'hbs!tmpl/item/get_patient_view_tmpl'
],
function( Backbone, Global, GetPatientViewTmpl  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({

		initialize: function() {
			console.log("initialize a GetPatientViewTmpl ItemView");
		},

    	template: GetPatientViewTmpl,
		tagName: 'div',
		className: 'create-record',

		/* ui selector cache */
		ui: {
			patientAddress: '#patientAddress',
			getPatientButton: '#get-patient-button',
			messages: '#messages',
			getPatientRegion: "#get-patient"
		},

		/* Ui events hash */
		events: {
			'click @ui.getPatientButton': 'onClickGetPatient'
		},

		/* on render callback */
		onRender: function() {},

		onClickGetPatient: function(e) {
			$.ajax({
				url: Global.apiBase + '/patient/' + this.ui.patientAddress.val(), // TODO validate for bollox
				type: 'GET',
				contentType: 'application/json; charset=utf-8',
				success: function (response) {
					console.log(response);
				},
				error:function (xhr, ajaxOptions, thrownError){
					if(xhr.status==404) {
						console.log('Patient not found, create a new one.');
					}
					// TODO handle else
				}
			});
		}
	});

});
