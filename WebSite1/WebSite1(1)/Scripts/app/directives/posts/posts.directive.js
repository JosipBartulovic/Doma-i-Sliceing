angular.module("DomaciApp").directive('posts', function () {
    var directive = {};

    directive.controller = "postsDirectiveController";
    directive.restrict = 'E';
    directive.templateUrl = "/Scripts/app/directives/posts/posts.template.html";
    directive.scope = {
        posts: "=",
        filterby: "=" 
    };
    return directive;
});