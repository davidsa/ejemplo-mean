angular.module('myApp.services', [])
  .service('Cat', function($http) {
    var url = "/api/";

    this.getCats = function() {
      return $http.get(
        url
      );
    };

    this.saveCat = function(name) {
      return $http.post(
        url, {
          name: name
        }
      );
    };
  });
