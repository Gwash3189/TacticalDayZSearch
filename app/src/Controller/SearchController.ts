///<reference path='../../_app.ts' />

module TacZ {
    export module Controller {
        export module Search {
            export class SearchController{
                constructor($scope) {
                    $scope.vm = this;

                }
            }
        }
    }
}
angular.module("TacZ").controller("SearchController", TacZ.Controller.Search.SearchController);