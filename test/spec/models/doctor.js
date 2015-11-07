(function() {
	'use strict';

	var root = this;

	root.define([
		'models/doctor'
		],
		function( Doctor ) {

			describe('Doctor Model', function () {

				it('should be an instance of Doctor Model', function () {
					var doctor = new Doctor();
					expect( doctor ).to.be.an.instanceof( Doctor );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );