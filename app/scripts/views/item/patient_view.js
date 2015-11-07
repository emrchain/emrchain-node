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
		},

    	template: PatientViewTmpl,
		tagName: 'div',
		className: 'register-patient',

    	/* ui selector cache */
    	ui: {
			firstName: '#firstName',
			lastName: '#lastName',
			ppsNumber: '#ppsNumber',
			dateOfBirth: '#dateOfBirth',
			registerPatientButton: '#register-button',
			messages: '#messages'
		},

		/* Ui events hash */
		events: {
			'click @ui.registerPatientButton': 'onClickRegisterPatient'
		},

		/* on render callback */
		onRender: function() {
		},

		onClickRegisterPatient: function(e) {
			var self = this;
			this.model.save({
				firstName: this.ui.firstName.val(),
				lastName: this.ui.lastName.val(),
				ppsNumber: this.ui.ppsNumber.val(),
				dateOfBirth: this.ui.dateOfBirth.val()
			}, { success: function(model, response) {
				console.log("success", self);
				self.ui.messages.html("Successfully created Patient:\n" +
					"Private Key: " + response.patient.private_key + "\n" +
					"Public Key: " + response.patient.public_key);
				self.ui.messages.removeClass('hidden');
			}});
		}
	});

});
