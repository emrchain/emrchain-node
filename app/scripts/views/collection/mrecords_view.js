define([
	'backbone',
	'collections/mrecords',
	'views/item/mrecord_view',
	'hbs!tmpl/collection/mrecords_view_tmpl'
],
function( Backbone, MRecordsCollection, MRecordItemView, MRecordsViewTmpl ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.CollectionView.extend({

		initialize: function() {
			console.log("initialize a MrecordsView CollectionView");
		},

		template: MRecordsViewTmpl,


    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {}
	});

});
