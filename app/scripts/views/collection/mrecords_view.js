define([
		'backbone',
		'globals',
		'qrcode',
		'qcode-decoder',
		'collections/mrecords',
		'../item/get_patient_view',
		'hbs!tmpl/collection/mrecords_view_tmpl'
	],
	function (Backbone, Global, QRCode, QCodeDecoder, MRecordsCollection, MRecordItemView, MRecordsViewTmpl) {
		'use strict';

		return Backbone.Marionette.LayoutView.extend({
			tagName: 'div',
			id: 'HistoryView',

			template: MRecordsViewTmpl,
			childView: MRecordItemView,
			regions: {
				'historyTable': '#history-table'
			},

			initialize: function (options) {
				this.collection = new MRecordsCollection();

				//this.listenTo(this.collection, 'all', this.render);
				//this.collection.fetch();
			},

			ui: {
				patientAddress: '#patientAddress',
				getPatientButton: '#get-patient-button',
				messages: '#messages',
				createRecordContent: '#create-record-content',
				qrCanvas: '#webcodecam-canvas'
			},
			events: {
				'click @ui.getPatientButton': 'onClickGetPatient'
			},

			onRender: function () {
				var self = this;
				var qr = new QCodeDecoder();
				var cameraCanvas = $('<video autoplay width="320" height="240">').get()[0];
				qr.decodeFromCamera(cameraCanvas, function (er, res) {
					if (res) {
						self.model.set({patientAddress: res});
						self.ui.patientAddress.val(res);
						console.log(res);
						qr.stop();
						self.onClickGetPatient(null);
					}
				});
				this.ui.qrCanvas.append(cameraCanvas);
			},

			onClickGetPatient: function (e) {
				var self = this;
				var patientAddressVal = this.ui.patientAddress.val();
				$.ajax({
					url: Global.apiBase + '/patient/' + patientAddressVal, // TODO validate for bollox
					type: 'GET',
					contentType: 'application/json; charset=utf-8',
					success: function (response) {
						console.log(response);
						self.model.set({patientAddress: patientAddressVal});
						self.model.trigger('gotPatient');
					},
					error: function (xhr, ajaxOptions, thrownError) {
						if (xhr.status == 404) {
							console.log('Patient not found, create a new one.');
							self.model.set({patientAddress: patientAddressVal});
							self.model.trigger('gotPatient');
						}
						// TODO handle else
					}
				});
			}

		});

	});
