define([
	'backbone',
	'collections/mrecords',
	'views/item/mrecord_view',
	'hbs!tmpl/collection/mrecords_view_tmpl'
],
function( Backbone, MRecordsCollection, MRecordItemView, MRecordsViewTmpl ) {
    'use strict';

	return Backbone.Marionette.LayoutView.extend({
		tagName: 'div',
		id: 'HistoryView',

		template: MRecordsViewTmpl,
		childView: MRecordItemView,
		regions: {
			'historyTable': '#history-table'
		},

		initialize: function(options) {
			this.collection = new MRecordsCollection();

			//this.listenTo(this.collection, 'all', this.render);
			//this.collection.fetch();
		},

		ui: {},
		events: {},

		onRender: function() {
		}
	});

});
