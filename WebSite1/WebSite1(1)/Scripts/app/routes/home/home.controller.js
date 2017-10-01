angular.module('DomaciApp').controller("homeController", function ($scope, localStorageService) {
    localStorageSetup(localStorageService);
    $scope.posts = [];
    $scope.noMorePosts = false;
    $scope.postGenerator = getPosts();
    $scope.generatePosts = function () {
        var posts = []
        for (i = 0; i < 6; i++) {
            posts.push($scope.postGenerator.next().value);
        }
        _.forEach(posts, function (data) {
            if (data) {
                $scope.posts.push(data);
            } else {
                $scope.noMorePosts = true;
            }
        })
    }
    $scope.generatePosts();
});

