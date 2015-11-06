(function() {
	'use strict';

	var root = this;

	root.define([
		'views/item/sale_view'
		],
		function( SaleView ) {

			describe('SaleView Itemview', function () {

				it('should be an instance of SaleView Itemview', function () {
					var sale_view = new SaleView();
					expect( sale_view ).to.be.an.instanceof( SaleView );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );