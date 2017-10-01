angular.module("DomaciApp").config(function ($stateProvider) {
    $stateProvider.state("favourites", {
        url: "/favourites",
        controller: "favouritesController",
        templateUrl: "Scripts/app/routes/favourites/favourites.template.html"
    });
});