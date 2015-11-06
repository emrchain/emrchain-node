(function() {
	'use strict';

	var root = this;

	root.define([
		'collections/sales'
		],
		function( Sales ) {

			describe('Sales Collection', function () {

				it('should be an instance of Sales Collection', function () {
					var sales = new Sales();
					expect( sales ).to.be.an.instanceof( Sales );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );