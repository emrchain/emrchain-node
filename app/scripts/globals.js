/*global define*/

define(function() {
	'use strict';

	var apiBaseUrl = "http://localhost:9000";

	var Globals = {
		apiBase: apiBaseUrl,
		patientbase: apiBaseUrl + '/patients'
	};

	return Globals;
});
