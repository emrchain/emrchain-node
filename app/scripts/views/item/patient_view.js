define([
	'backbone',
	'hbs!tmpl/item/patient_view_tmpl'
],
function( Backbone, PatientViewTmpl  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({

		initialize: function() {
			console.log("initialize a PatientView ItemView");
		},

    	template: PatientViewTmpl,
		tagName: 'div',
		className: 'register-patient',

    	/* ui selector cache */
    	ui: {
			registerPatientButton: '#register-button'
		},

		/* Ui events hash */
		events: {
			'click @ui.registerPatientButton': 'onClickRegisterPatient'
		},

		/* on render callback */
		onRender: function() {},

		onClickRegisterPatient: function(args) {
			console.log('here', args);
		}
	});

});
