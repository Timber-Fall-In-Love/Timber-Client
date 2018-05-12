'use strict';

var app = app || {};

(function(module) {

  const signInView = {};

  signInView.initView = () => {
    $('#sign-in').fadeIn(750);
  };

module.signInView = signInView;

})(app);