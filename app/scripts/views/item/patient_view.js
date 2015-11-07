define([
	'backbone',
	'models/patient',
	'hbs!tmpl/item/patient_view_tmpl'
],
function( Backbone, PatientModel, PatientViewTmpl  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({

		initialize: function() {
			this.model = new PatientModel();
			console.log("initialize a PatientView ItemView");
			console.log('model->', this.model);
		},

    	template: PatientViewTmpl,
		tagName: 'div',
		className: 'register-patient',

    	/* ui selector cache */
    	ui: {
			patientName: '#patientName',
			registerPatientButton: '#register-button'
		},

		/* Ui events hash */
		events: {
			'click @ui.registerPatientButton': 'onClickRegisterPatient'
		},

		/* on render callback */
		onRender: function() {
		},

		onClickRegisterPatient: function(e) {
			this.model.set({
				patientName: this.ui.patientName.val()
			});
			console.log('model', this.model);
		}
	});

});
