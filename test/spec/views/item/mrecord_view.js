(function() {
	'use strict';

	var root = this;

	root.define([
		'views/item/mrecord_view'
		],
		function( MrecordView ) {

			describe('MrecordView Itemview', function () {

				it('should be an instance of MrecordView Itemview', function () {
					var mrecord_view = new MrecordView();
					expect( mrecord_view ).to.be.an.instanceof( MrecordView );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );