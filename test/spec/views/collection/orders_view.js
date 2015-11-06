(function() {
	'use strict';

	var root = this;

	root.define([
		'views/collection/orders_view'
		],
		function( OrdersView ) {

			describe('OrdersView Collectionview', function () {

				it('should be an instance of OrdersView Collectionview', function () {
					var orders_view = new OrdersView();
					expect( orders_view ).to.be.an.instanceof( OrdersView );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );