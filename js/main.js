(function() {
  var app = angular.module('taxiApp', []);
  app.controller('mainController', function(){
    this.cars = cars;
    this.tab = 8;
    this.state = 1;
    this.car = 0;

    this.setTab = function(newTab){
        this.tab = newTab;
        window.scroll(0,-Math.max(document.body.scrollTop,document.documentElement.scrollTop));
    };
    this.isSet = function(newTab){
        return this.tab == newTab;
    };
    this.html = function(page){
        if (page === 6) return 'test.html';
    };
    this.setState = function(newState){
        this.state = newState;
        window.scroll(0,-Math.max(document.body.scrollTop,document.documentElement.scrollTop));
    };
    this.isState = function(newState){
        return this.state == newState;
    };
    this.setCar = function(newCar){
        this.car = newCar;
    };
    this.checkState = function(checkState, state){
      if (state) document.getElementById(checkState).classList.add('stateGood');
      else document.getElementById(checkState).classList.remove('stateGood');
    };
  });

})();