define([
		'backbone',
		'models/doctor',
		'hbs!tmpl/item/doctor_view_tmpl'
	],
	function (Backbone, DoctorModel, DoctorViewTmpl) {
		'use strict';

		/* Return a ItemView class definition */
		return Backbone.Marionette.ItemView.extend({

			initialize: function () {
				this.model = new DoctorModel();
				console.log("initialize a DoctorView ItemView");
				console.log('model->', this.model);
			},

			template: DoctorViewTmpl,
			tagName: 'div',
			className: 'register-doctor',

			/* ui selector cache */
			ui: {
				doctorName: '#doctorName',
				doctorLastname: '#doctorLastname',
				doctorId: '#doctorId',
				doctorLocation: '#doctorLocation',
				registerDoctorButton: '#register-button',
				messages: '#messages',
				qrMessages: '#qrMessages',
				publicKey: '#publicKey',
				publicKeyImg: '#publicKeyImg',
				privateKey: '#privateKey',
				privateKeyImg: '#privateKeyImg'
			},

			/* Ui events hash */
			events: {
				'click @ui.registerDoctorButton': 'onClickRegisterDoctor'
			},

			/* on render callback */
			onRender: function () {
			},

			onClickRegisterDoctor: function (e) {
				var self = this;
				this.model.save({
					doctorName: this.ui.doctorName.val(),
					doctorLastname: this.ui.doctorLastname.val(),
					doctorId: this.ui.doctorId.val(),
					doctorLocation: this.ui.doctorLocation.val()
				}, {
					success: function (model, response) {
						console.log("success", self);
						self.ui.messages.html("Successfully created Doctor:\n" +
							"Private Key: " + response.patient.private_key + "\n" +
							"Public Key: " + response.patient.public_key);
						self.ui.messages.removeClass('hidden');
						self.ui.qrMessages.removeClass('hidden');
						self.ui.publicKey.html(response.patient.public_key);
						self.ui.publicKeyImg.attr("src", "//chart.googleapis.com/chart?chs=250x250&cht=qr&chl=" + response.patient.public_key);
						self.ui.privateKey.html(response.patient.private_key);
						self.ui.privateKeyImg.attr("src", "//chart.googleapis.com/chart?chs=250x250&cht=qr&chl=" + response.patient.private_key);
					}
				});
				//console.log('model', this.model);
				//this.model.save();
			}
		});

	});
