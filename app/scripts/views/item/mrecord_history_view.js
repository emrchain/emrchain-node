define([
		'backbone',
		'models/mrecord',
		'hbs!tmpl/item/mrecord_history_view_tmpl'
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
			},

			/* Ui events hash */
			events: { },

			/* on render callback */
			onRender: function() {}
		});

	});
