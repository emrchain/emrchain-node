(function() {
	'use strict';

	var root = this;

	root.define([
		'models/partner_sale'
		],
		function( PartnerSale ) {

			describe('PartnerSale Model', function () {

				it('should be an instance of PartnerSale Model', function () {
					var partner_sale = new PartnerSale();
					expect( partner_sale ).to.be.an.instanceof( PartnerSale );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );