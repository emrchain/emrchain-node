(function() {
	'use strict';

	var root = this;

	root.define([
		'models/mrecord'
		],
		function( Mrecord ) {

			describe('Mrecord Model', function () {

				it('should be an instance of Mrecord Model', function () {
					var mrecord = new Mrecord();
					expect( mrecord ).to.be.an.instanceof( Mrecord );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );