(function() {
	'use strict';

	var root = this;

	root.define([
		'views/layout/app_container'
		],
		function( AppContainer ) {

			describe('AppContainer Layout', function () {

				it('should be an instance of AppContainer Layout', function () {
					var app_container = new AppContainer();
					expect( app_container ).to.be.an.instanceof( AppContainer );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );