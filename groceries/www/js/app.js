// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.controller('ListCtrl', function($scope, $ionicListDelegate) {

  $scope.items = [];

  $scope.addItem = function() {
    var name = prompt('What do you need to buy?');
    if (name) {
      $scope.items.push({
        'name': name
      });
    }
  };

  $scope.purchaseItem = function(item) {
  	$scope.item = item;
  	$scope.item['status'] = 'purchased';
  	$ionicListDelegate.closeOptionButtons();
  };
});