(function() {
	'use strict';

	var root = this;

	root.define([
		'views/item/patient_view'
		],
		function( PatientView ) {

			describe('PatientView Itemview', function () {

				it('should be an instance of PatientView Itemview', function () {
					var patient_view = new PatientView();
					expect( patient_view ).to.be.an.instanceof( PatientView );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );