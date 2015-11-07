define([
	'backbone'
],
function( Backbone ) {
    'use strict';

	/* Return a model class definition */
	return Backbone.Model.extend({
		urlRoot: '/doctor',

		initialize: function() {
			console.log("initialize a Doctor model");
		},

		defaults: {}

    });
});
