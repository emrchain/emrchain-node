(function() {
	'use strict';

	var root = this;

	root.define([
		'models/patient'
		],
		function( Patient ) {

			describe('Patient Model', function () {

				it('should be an instance of Patient Model', function () {
					var patient = new Patient();
					expect( patient ).to.be.an.instanceof( Patient );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );