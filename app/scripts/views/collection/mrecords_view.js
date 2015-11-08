define([
	'backbone',
	'collections/mrecords',
	'../item/get_patient_view',
	'hbs!tmpl/collection/mrecords_view_tmpl'
],
function( Backbone, MRecordsCollection, MRecordItemView, MRecordsViewTmpl ) {
    'use strict';

	return Backbone.Marionette.LayoutView.extend({
		tagName: 'div',
		id: 'HistoryView',

		template: MRecordsViewTmpl,
		childView: MRecordItemView,

		initialize: function() {
			var records = [];
			var metadata = this.model.attributes.metadata;
			metadata.records.forEach(function(record) {
				records.push({
					assetId: record.assetId,
					assetUrl: 'record/' + record.assetId,
					blocktime: record.blocktime
				});
			});
			this.model.set({ records: records });
		},

		ui: {},
		events: {},

		onRender: function() {}
	});

});
