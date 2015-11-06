(function() {
	'use strict';

	var root = this;

	root.define([
		'views/collection/partners_view'
		],
		function( PartnersView ) {

			describe('PartnersView Collectionview', function () {

				it('should be an instance of PartnersView Collectionview', function () {
					var partners_view = new PartnersView();
					expect( partners_view ).to.be.an.instanceof( PartnersView );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );