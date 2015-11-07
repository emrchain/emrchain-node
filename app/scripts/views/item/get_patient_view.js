define([
	'backbone',
	'hbs!tmpl/item/get_patient_view_tmpl'
],
function( Backbone, GetPatientViewTmpl  ) {
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

		}
	});

});
