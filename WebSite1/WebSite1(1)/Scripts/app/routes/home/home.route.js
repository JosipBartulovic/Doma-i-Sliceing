angular.module("DomaciApp").config(function ($stateProvider) {
    $stateProvider.state("home", {
        url: "/",
        controller: "homeController",
        templateUrl: "Scripts/app/routes/home/home.template.html"
    });
});


