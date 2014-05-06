/// <reference path="../../_app.ts" />

module TacZ{
    export module Model{
        export class State implements ng.ui.IState{
            constructor(public name: string, public templateUrl: string, public url: string, public controller: string, resolve?){}
        }
    }
}