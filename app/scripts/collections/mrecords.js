define([
	'backbone',
	'models/mrecord'
],
function( Backbone, MRecordModel ) {
    'use strict';

	/* Return a collection class definition */
	return Backbone.Collection.extend({
		model: MRecordModel,
		initialize: function() {
			console.log("initialize a Mrecords collection");
		}
	});
});
