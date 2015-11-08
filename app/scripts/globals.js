/*global define*/

define(function() {
	'use strict';

	//var apiBaseUrl = "http://localhost:9000";
	var apiBaseUrl = "http://159.122.238.144";

	var Globals = {
		apiBase: apiBaseUrl,
		patientbase: apiBaseUrl + '/patients'
	};

	return Globals;
});
