(function() {
	'use strict';

	var root = this;

	root.define([
		'views/item/partner_view'
		],
		function( PartnerView ) {

			describe('PartnerView Itemview', function () {

				it('should be an instance of PartnerView Itemview', function () {
					var partner_view = new PartnerView();
					expect( partner_view ).to.be.an.instanceof( PartnerView );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );