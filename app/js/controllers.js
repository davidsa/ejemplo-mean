  var ctrl = angular.module('myApp.controllers', []);

  ctrl.controller('CatCtrl', function($scope, Cat) {
    $scope.catList = [];
    loadCats();

    $scope.saveCat = function(name) {
      Cat.saveCat(name).then(function(data) {
        loadCats();
      });
    };

    function loadCats() {
      Cat.getCats().then(function(data) {
        console.log(data);
        $scope.catList = data.data;
      });
    }
  });

  ctrl.controller('LoginCtrl', function($scope, $location) {
    $scope.login = function(username, password) {
      if (username && password && username === 'david' && password === '1234') {
        $location.path('/cat');
      }
    }
  });
