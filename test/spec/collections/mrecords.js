(function() {
	'use strict';

	var root = this;

	root.define([
		'collections/mrecords'
		],
		function( Mrecords ) {

			describe('Mrecords Collection', function () {

				it('should be an instance of Mrecords Collection', function () {
					var mrecords = new Mrecords();
					expect( mrecords ).to.be.an.instanceof( Mrecords );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );