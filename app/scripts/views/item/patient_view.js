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
			messages: '#messages',
			qrMessages: '#qrMessages',
			publicKey: '#publicKey',
			publicKeyImg: '#publicKeyImg',
			privateKey: '#privateKey',
			privateKeyImg: '#privateKeyImg'
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
				self.ui.messages.html("Successfully created Patient!");
				self.ui.messages.removeClass('hidden');
				self.ui.qrMessages.removeClass('hidden');
				self.ui.publicKey.html(response.patient.public_key);
				self.ui.publicKeyImg.attr("src", "//chart.googleapis.com/chart?chs=250x250&cht=qr&chl=" + response.patient.public_key);
				self.ui.privateKey.html(response.patient.private_key);
				self.ui.privateKeyImg.attr("src", "//chart.googleapis.com/chart?chs=250x250&cht=qr&chl=" + response.patient.private_key);
			}});
		}
	});

});
