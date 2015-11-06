(function() {
	'use strict';

	var root = this;

	root.define([
		'models/partner'
		],
		function( Partner ) {

			describe('Partner Model', function () {

				it('should be an instance of Partner Model', function () {
					var partner = new Partner();
					expect( partner ).to.be.an.instanceof( Partner );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );