///<reference path='../../_app.ts' />

module TacZ {
    export module Controller {
        export module Search {
            export class SearchController{
                constructor($scope, RegionLoaderService:TacZ.Service.RegionLoader.Loader) {
                    $scope.vm = this;
                    $scope.vm.neaf = {};
                    RegionLoaderService.Get("neaf").then((data:TacZ.Model.Region)=> {
                        console.log(data.Image);
                        $scope.vm.neaf = data;
                    });

                }
            }
        }
    }
}
angular.module("TacZ").controller("SearchController", TacZ.Controller.Search.SearchController);