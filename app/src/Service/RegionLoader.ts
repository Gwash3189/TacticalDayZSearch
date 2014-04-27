///<reference path='../../_app.ts' />

module TacZ {
    export module RegionLoader {
        export class Loader implements TacZ.Interface.RegionLoader.IRegionLoader {
            private Location:string = "Region/";
            private Json = ".json";
            private Png = ".png";
            private FileSeperator = "/";
            private $http:ng.IHttpService;

            public Get(region:string) {
                debugger;
                return this.$http.get(this.CreateRegionJsonString(region))
                    .then((result) => {
                        debugger;
                        var data = result.data;
                        result.data = new TacZ.Model.Region(data.Id, new TacZ.Util.List<TacZ.Interface.Model.ICity>(data.Cities), new TacZ.Util.List<TacZ.Interface.Model.ICity>(data.Buildings), new TacZ.Util.List<TacZ.Interface.Model.IRoad>(), data.Name, data.Description, this.CreateRegionPngString(region));
                        return result.data;
                    });
            }

            public CreateRegionJsonString(region:string) {
                return this.Location + region + this.FileSeperator + region + this.Json
            }

            public CreateRegionPngString(region:string) {
                return this.Location + region + this.FileSeperator + region + this.Png
            }

            constructor($http:ng.IHttpService) {
                this.$http = $http;
            }

        }
    }
}
angular.module("TacZ").service("RegionLoaderService", TacZ.RegionLoader.Loader);