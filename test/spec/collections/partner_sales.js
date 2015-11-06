(function() {
	'use strict';

	var root = this;

	root.define([
		'collections/partner_sales'
		],
		function( PartnerSales ) {

			describe('PartnerSales Collection', function () {

				it('should be an instance of PartnerSales Collection', function () {
					var partner_sales = new PartnerSales();
					expect( partner_sales ).to.be.an.instanceof( PartnerSales );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );