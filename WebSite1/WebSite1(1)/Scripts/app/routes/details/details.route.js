angular.module("DomaciApp").config(function ($stateProvider) {
    $stateProvider.state("details", {
        url: "/details:id",
        controller: "detailsController",
        templateUrl: "Scripts/app/routes/details/details.template.html",
        params: {
            id: null
        }
    });
});