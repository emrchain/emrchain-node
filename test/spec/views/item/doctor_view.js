(function() {
	'use strict';

	var root = this;

	root.define([
		'views/item/doctor_view'
		],
		function( DoctorView ) {

			describe('DoctorView Itemview', function () {

				it('should be an instance of DoctorView Itemview', function () {
					var doctor_view = new DoctorView();
					expect( doctor_view ).to.be.an.instanceof( DoctorView );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );