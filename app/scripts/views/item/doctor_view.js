define([
	'backbone',
	'hbs!tmpl/item/doctor_view_tmpl'
],
function( Backbone, DoctorViewTmpl  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({

		initialize: function() {
			console.log("initialize a DoctorView ItemView");
		},
		
    	template: DoctorViewTmpl,
        

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {}
	});

});
