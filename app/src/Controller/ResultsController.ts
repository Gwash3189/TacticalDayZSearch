///<reference path='../../_app.ts' />

module TacZ {
    export module Controller {
        export module Search {
            export class ResultsController {
                constructor($scope) {
                    $scope.vm = this;
                }
            }
        }
    }
}
angular.module("TacZ").controller("ResultsController", TacZ.Controller.Search.ResultsController);