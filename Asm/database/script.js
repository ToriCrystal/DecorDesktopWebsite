var app = angular.module('myApp', []);
app.controller('myController', function ($scope, $http) {
  $http.get("/database/decor.json").then(function (response) {
    $scope.Example = response.data.showcase;
  });
  
  $http.get("/database/goodrecommend.json").then(function (response) {
    $scope.Good = response.data.goodrecommend;
  });
});
