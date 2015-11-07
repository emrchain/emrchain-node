/*global define*/

define(function() {
	'use strict';

	if(process.env.NODE_ENV == "PRODUCTION") {
		var apiBaseUrl = "http://159.122.238.144"
	} else {
		var apiBaseUrl = "http://localhost:9000"
	}

	var Globals = {
		apiBase: apiBaseUrl,
		patientbase: apiBaseUrl + '/patients'
	};

	return Globals;
});
