/// <reference path="../_app.ts" />

angular.module("TacZ",['ui.router']).config(($stateProvider: ng.ui.IStateProvider, $urlRouterProvider :ng.ui.IUrlRouterProvider) => {
    var states = new TacZ.States.States();
    states.List.Items.map((state) => {
        $stateProvider.state(state);
    });

    $urlRouterProvider.otherwise("/");
});
