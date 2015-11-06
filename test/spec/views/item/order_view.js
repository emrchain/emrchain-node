(function() {
	'use strict';

	var root = this;

	root.define([
		'views/item/order_view'
		],
		function( OrderView ) {

			describe('OrderView Itemview', function () {

				it('should be an instance of OrderView Itemview', function () {
					var order_view = new OrderView();
					expect( order_view ).to.be.an.instanceof( OrderView );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );