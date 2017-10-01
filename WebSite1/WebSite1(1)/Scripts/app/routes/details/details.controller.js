angular.module('DomaciApp').controller("detailsController", function ($scope, localStorageService, $stateParams) {
    $scope.post = getPostById($stateParams.id);
    $scope.getComments = getPostComments;
});

