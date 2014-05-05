///<reference path='../../_app.ts' />

module TacZ {
    export module Search {
        export module Controller {
            export class SearchController {
                constructor($scope, RegionLoaderService:TacZ.Service.RegionLoader.Loader) {
                    $scope.vm = this;
                    $scope.vm.neaf = {};
                    RegionLoaderService.Get("neaf").then((data: TacZ.Model.Region)=> {
                        console.log(data.Image);
                        $scope.vm.neaf = data;
                    });

                }
            }
        }
    }
}
angular.module("TacZ").controller("SearchController", TacZ.Search.Controller.SearchController);