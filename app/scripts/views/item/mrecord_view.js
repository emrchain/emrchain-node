define([
	'backbone',
	'hbs!tmpl/item/mrecord_view_tmpl'
],
function( Backbone, MrecordViewTmpl  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({

		initialize: function() {
			console.log("initialize a MrecordView ItemView");
		},
		
    	template: MrecordViewTmpl,
        

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {}
	});

});
