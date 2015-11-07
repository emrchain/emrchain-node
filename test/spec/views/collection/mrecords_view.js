(function() {
	'use strict';

	var root = this;

	root.define([
		'views/collection/mrecords_view'
		],
		function( MrecordsView ) {

			describe('MrecordsView Collectionview', function () {

				it('should be an instance of MrecordsView Collectionview', function () {
					var mrecords_view = new MrecordsView();
					expect( mrecords_view ).to.be.an.instanceof( MrecordsView );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );