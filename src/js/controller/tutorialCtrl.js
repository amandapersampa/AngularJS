angular
    .module('tutorialCtrlModule', [])
    .controller('TutorialCtrl',
        ["$scope", function ($scope) {
            {
                $scope.tutorialObject = {};
                $scope.tutorialObject.title = "Main Page";
                $scope.tutorialObject.subTitle = "Sub Title";
                $scope.tutorialObject.bindOutput = 2;
                $scope.tutorialObject.fname = "Amanda";
                $scope.tutorialObject.lname = "Sampaio";

                $scope.timesTwo = function () {
                    $scope.tutorialObject.bindOutput = Calculations.timesTwo($scope.tutorialObject.bindOutput);
                }
            }
        }])
    .directive("apWelcomeMessage", function () {
        return {
            restrict: "AE",
            template: "<div>Olá, como vai?</div>"
        }
    })
    .factory("Calculations", function () {
        var calculations = {};
        calculations.timesTwo = function(a){
            return a * 2;
        }

        calculations.pythagorasTheorun = function(a , b){
            return (a*a) + (b*b);
        }
        return calculations;
    })