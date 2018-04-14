var app = angular.module('myApp', []);


app.controller('MainCtrl', ['$http', '$scope', function($http, $scope) {
  $scope.name = 'STC';

  // Spotify API : https://jsonplaceholder.typicode.com/albums
  $http.get('https://jsonplaceholder.typicode.com/albums').success(function(albums) {
    $scope.albums = albums;
  });

}]);

app.directive('exampleDirective', function() {
  return {
    restrict: 'E',
    template: '<h1>Hello {{name}}!</h1>' + '<div class="container">' +
      '<div class="row">' + '<div class="col-md-12">' +
      '</div>',
    controller: function($scope, $element) {
      $scope.name = $scope.name + " Team ";
    },
   
    }
  }
     )

