angular.module('DomaciApp').controller("favouritesController", function ($scope, localStorageService) {
    $scope.favourites = getFavouritePosts(localStorageService);
    console.log($scope.favourites)
    $scope.isFavourite = function (id) {
        return isFavourite(localStorageService, id)
    }
});

