define([
	'backbone',
    'models/doctor',
	'hbs!tmpl/item/doctor_view_tmpl'
],
function( Backbone, DoctorModel, DoctorViewTmpl  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({

		initialize: function() {
			this.model = new DoctorModel();
			console.log("initialize a DoctorView ItemView");
			console.log('model->', this.model);
		},

    	template: DoctorViewTmpl,
		tagName: 'div',
		className: 'register-doctor',

    	/* ui selector cache */
    	ui: {
			doctorName: '#doctorName',
			doctorLastname: '#doctorLastname',
			doctorId: '#doctorId',
			doctorLocation: '#doctorLocation',
			registerDoctorButton: '#register-button'
		},

		/* Ui events hash */
		events: {
			'click @ui.registerDoctorButton': 'onClickRegisterDoctor'
		},

		/* on render callback */
		onRender: function() {
		},

		onClickRegisterDoctor: function(e) {
			this.model.set({
				doctorName: this.ui.doctorName.val(),
				doctorLastname: this.ui.doctorLastname.val(),
				doctorId: this.ui.doctorId.val(),
				doctorLocation: this.ui.doctorLocation.val()
			});
			console.log('model', this.model);
			this.model.save();
		}
	});

});
