(function(){
  'use strict';

  angular.module('app')

  .controller('MainController', MainController);

  function MainController(){
    var vm = this;

    vm.todos = [
      {
        face : 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQl7UQ2N91uExrer8I9Dim_pAqomv9goJbbNCVqn-WlPi8xURau',
        what: 'Basketball',
        who: 'I\'ve been playing basketball since I was a kid and still contest that it\'s the greatest medium of excercise on the planet.'
      },
      {
        face : 'http://www.clipartbest.com/cliparts/niE/Rjk/niERjkxiA.gif',
        what: 'Music',
        who: 'Music is one of those things I was glad my parents forced me to do. I play the guitar like John Mayer, or at least I try.'
      },
      {
        face : 'http://www.chicagonow.com/tween-us/files/2012/05/video-game-controller.jpg',
        what: 'Video Games',
        who: 'League of Legends, NBA 2k, Halo, Call Of Duty? I\'m there.'
      }
    ]
  }

})()
