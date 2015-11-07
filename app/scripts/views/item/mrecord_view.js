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
			tagName: 'div',
			className: 'create-record',

			/* ui selector cache */
			ui: {
				patientAddress: '#patientAddress',
				patientBloodType: '#patientBloodType',
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
					patientAddress: this.ui.patientAddress.val(),
					patientBloodType: this.ui.patientBloodType.val()
				}, { success: function(model, response) {
					console.log("success", self.ui.messages);
					self.ui.messages.html("Successfully created Medical Record!");
					self.ui.messages.removeClass('hidden');
				}});
			}
		});

	});
