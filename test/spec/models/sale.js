(function() {
	'use strict';

	var root = this;

	root.define([
		'models/sale'
		],
		function( Sale ) {

			describe('Sale Model', function () {

				it('should be an instance of Sale Model', function () {
					var sale = new Sale();
					expect( sale ).to.be.an.instanceof( Sale );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );