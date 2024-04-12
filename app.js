let app = angular.module("myApp", []);
app.controller("myCrl", function($scope, $http) {
    $scope.currentIndex = 0;
    $http.get("database_content.json").then(function(response) {
        $scope.cards = response.data;
        console.log($scope.cards)
    })

    $scope.prev = function() {
        if ($scope.currentIndex > 0) {
            $scope.currentIndex -= 3; 
        }
    };

    $scope.next = function() {
        if ($scope.currentIndex < $scope.cards.length - 3) {
            $scope.currentIndex += 3; 
        }
    };
});

