define([
		'backbone',
		'models/mrecord',
		'hbs!tmpl/item/mrecord_view_tmpl'
	],
	function( Backbone, MRecordModel, MRecordViewTmpl  ) {
		'use strict';

		/* Return a ItemView class definition */
		return Backbone.Marionette.ItemView.extend({

			initialize: function() {
				console.log("initialize a MRecordViewTmpl ItemView");
			},

			template: MRecordViewTmpl,

			/* ui selector cache */
			ui: {
				patientAddress: '#patientAddress',
				patientBloodType: '#patientBloodType',
				dateOfBirth: '#dateOfBirth',
				gender: '#gender',
				medicalActionsTaken: '#medicalActionsTaken',
				saveRecordButton: '#create-record-button',
				messages: '#messages'
			},

			/* Ui events hash */
			events: {
				'click @ui.saveRecordButton': 'onClickSaveRecord'
			},

			/* on render callback */
			onRender: function() {},

			onClickSaveRecord: function(e) {
				var self = this;
				this.model.save({
					patientId: this.ui.patientAddress.val(),
					dateOfBirth: this.ui.dateOfBirth.val(),
					patientBloodType: this.ui.patientBloodType.val(),
					gender: this.ui.gender.val(),
					medicalActionsTaken: this.ui.medicalActionsTaken.val()
				}, { success: function(model, response) {
					console.log("success", self.ui);
					self.ui.messages.html("Successfully created Medical Record!");
					self.ui.messages.removeClass('hidden');
				}});
			}
		});

	});
