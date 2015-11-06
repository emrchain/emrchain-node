(function() {
	'use strict';

	var root = this;

	root.define([
		'collections/partners'
		],
		function( Partners ) {

			describe('Partners Collection', function () {

				it('should be an instance of Partners Collection', function () {
					var partners = new Partners();
					expect( partners ).to.be.an.instanceof( Partners );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );