(function(){
  'use strict';

  angular.module('app')

  .controller('MainController', MainController);

  function MainController(){
  	function parallax() {
  		var about = document.getElementById('about-me');
  	  about.style.top = -( window.pageYOffset / 2 ) + 343 + 'px'
  	}

  	window.addEventListener("scroll", parallax, false);
  }

})()
