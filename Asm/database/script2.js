var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", { templateUrl: "bla.html" })
        .when("/showcase", { templateUrl: "showcase.html" })
        .when("/login", { templateUrl: "formsign.html" });
})