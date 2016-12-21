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
    .controller('TutorialCtrl2', function ($scope) {
       $scope.TutorialCtrl2 = "this is the second tutorial";
    });