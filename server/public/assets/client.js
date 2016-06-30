var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(["$routeProvider", function($routeProvider){
    $routeProvider.
          when("/home", {
              templateUrl: "/views/routes/home.html",
              controller: "HomeController"
          }).
          when("/projects", {
              templateUrl: "/views/routes/projects.html",
              controller: "ProjectsController"
          }).
          when("/cats", {
              templateUrl: "/views/routes/cats.html",
              controller: "CatsController"
          }).
          otherwise({
            redirectTo: "/home"
          });
}]);

myApp.controller("HomeController", ["$scope", "CounterService", function($scope, CounterService){




    $scope.iterate = function(){
        CounterService.iterate();
        console.log("HERE: " , CounterService.counter.count);
    };
}]);

myApp.controller("ProjectsController", ["$scope", "CounterService", function($scope, CounterService){
    console.log("Loaded Projects");
    console.log(CounterService.counter);
}]);

myApp.controller("CatsController", ["$scope", function($scope){
    console.log("Loaded Cats");
}]);

myApp.factory("CounterService", [function(){


    var cat = {
      count : 1
    };

    var catIterate = function(){
      cat.count++;
      console.log(cat.count);
    };

    //public
    return {
      counter : cat,
      iterate : catIterate
    };
}]);
