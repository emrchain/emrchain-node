(function() {
	'use strict';

	var root = this;

	root.define([
		'models/order'
		],
		function( Order ) {

			describe('Order Model', function () {

				it('should be an instance of Order Model', function () {
					var order = new Order();
					expect( order ).to.be.an.instanceof( Order );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );