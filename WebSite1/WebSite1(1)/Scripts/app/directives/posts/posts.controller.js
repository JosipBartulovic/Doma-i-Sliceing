angular.module("DomaciApp").controller("postsDirectiveController", function ($scope, localStorageService) {

    $scope.favourite = function (id) {
        favourite(localStorageService, id);
    }

    $scope.unFavourite = function (id) {
        unfavourite(localStorageService, id)
    }

    $scope.isFavourite = function (id) {
        return isFavourite(localStorageService, id)
    }

    console.log($scope.filterInput);
    $scope.grade = "CHMAAR";
});