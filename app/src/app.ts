/// <reference path="../_app.ts" />

angular.module("TacZ",[]).config(($stateProvider: ng.ui.IStateProvider, $urlRouterProvider :ng.ui.IUrlRouterProvider) => {
    var States = new TacZ.States.States();
    States.List.Items.map((state) => {
       $stateProvider.state(state);
    });

    $urlRouterProvider.otherwise("/");
});

module TacZ{
    export module States{
         export class State implements ng.ui.IState{
             constructor(public name: string, public templateUrl: string, public url: string){}
         }
        export class States {
            public List = new TacZ.Util.List<State>();
            constructor(){
                this.List.Push(new State("root","Search/Search.html", "/"));
                this.List.Push(new State("results","Results/Results.html", "/results"));
            }
        }
    }
}