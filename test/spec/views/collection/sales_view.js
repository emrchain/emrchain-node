(function() {
	'use strict';

	var root = this;

	root.define([
		'views/collection/sales_view'
		],
		function( SalesView ) {

			describe('SalesView Collectionview', function () {

				it('should be an instance of SalesView Collectionview', function () {
					var sales_view = new SalesView();
					expect( sales_view ).to.be.an.instanceof( SalesView );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );