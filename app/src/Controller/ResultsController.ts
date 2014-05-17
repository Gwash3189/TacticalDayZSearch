///<reference path='../../_app.ts' />

module TacZ {
    export module Controller {
        export module Search {
            export class ResultsController {
                Region:TacZ.Model.Region;

                constructor($scope, $stateParams, RegionLoaderService:TacZ.Service.RegionLoader.Loader) {
                    $scope.vm = this;
                    RegionLoaderService.Get($stateParams.rid).then((data:TacZ.Model.Region)=> {
                        this.Region = data;
                    });
                }
            }
        }
    }
}
angular.module("TacZ").controller("ResultsController", TacZ.Controller.Search.ResultsController);