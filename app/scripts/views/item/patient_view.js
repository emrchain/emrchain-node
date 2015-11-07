define([
	'backbone',
	'hbs!tmpl/item/patient_view_tmpl'
],
function( Backbone, PatientViewTmpl  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({

		initialize: function() {
			console.log("initialize a PatientView ItemView");
		},
		
    	template: PatientViewTmpl,
        

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {}
	});

});
