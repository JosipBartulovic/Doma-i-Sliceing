angular.module("DomaciApp").directive('comments', function () {
    var directive = {};

    directive.controller = "commentsDirectiveController";
    directive.restrict = 'E';
    directive.templateUrl = "/Scripts/app/directives/comments/comments.template.html";
    directive.scope = {
        comments: "=",
    };
    return directive;
});