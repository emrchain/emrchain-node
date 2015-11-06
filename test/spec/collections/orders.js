(function() {
	'use strict';

	var root = this;

	root.define([
		'collections/orders'
		],
		function( Orders ) {

			describe('Orders Collection', function () {

				it('should be an instance of Orders Collection', function () {
					var orders = new Orders();
					expect( orders ).to.be.an.instanceof( Orders );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );