var app = angular.module('tutorialApp',['ngRoute', 'tutorialCtrlModule']);

app.config(function($routeProvider) {
    $routeProvider
        .when("/tutorialSecond", {
            templateUrl: "views/tutorialSecond.html",
            controller: "TutorialCtrl2"
        })
        .when("/",{
            templateUrl: "views/tutorial.html",
            controller: "TutorialCtrl"
        })
        .otherwise({
            redirectTo: "/"
        });
});