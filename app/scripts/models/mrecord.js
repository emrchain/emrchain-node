define([
	'backbone'
],
function( Backbone ) {
    'use strict';

	/* Return a model class definition */
	return Backbone.Model.extend({
		urlRoot: '/record',

		initialize: function() {
			console.log("initialize a Mrecord model");
		},

		defaults: {}

    });
});
