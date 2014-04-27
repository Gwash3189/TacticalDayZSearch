///<reference path='../../_app.ts' />

module TacZ {
    export module Search {
        export module Controller {
            export class SearchController {
                public Testing = "Working";

                constructor($scope, RegionLoaderService:TacZ.RegionLoader.Loader) {
                    $scope.vm = this;
                    $scope.vm.neaf = {};
                    RegionLoaderService.Get("neaf").then((data: TacZ.Model.Region)=> {
                        $scope.vm.neaf = data;
                    });

                }
            }
        }
    }
}
angular.module("TacZ").controller("SearchController", TacZ.Search.Controller.SearchController);