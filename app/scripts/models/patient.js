define([
	'backbone'
],
function( Backbone ) {
    'use strict';

	/* Return a model class definition */
	return Backbone.Model.extend({
		urlRoot: '/patient',

		initialize: function() {
			console.log("initialize a Patient model");
		},

		defaults: {
			gender: 'Female'
		}

    });
});
