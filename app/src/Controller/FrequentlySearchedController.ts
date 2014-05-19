///<reference path='../../_app.ts' />

module TacZ {
    export module Controller {
        export module Search {
            export class FrequentlySearchedController {
                public FrequentlySearchedList = new TacZ.Util.List<TacZ.Interface.Model.IRegion>([
                    new TacZ.Model.Region("North East Air Field", "neaf")
                ]);
                constructor($scope) {
                    $scope.vm = this;
                }
            }
        }
    }
}
angular.module("TacZ").controller("FrequentlySearchedController", TacZ.Controller.Search.FrequentlySearchedController);