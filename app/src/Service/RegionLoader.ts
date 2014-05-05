///<reference path='../../_app.ts' />

module TacZ {
    export module Service {
        export module RegionLoader {
            export class Loader implements TacZ.Interface.Service.IRegionLoader {
                private Location:string = "Region/";
                private Buildings = "-buildings";
                private Roads = "-roads";
                private Json = ".json";
                private Png = ".png";
                private Map = "-map";
                private FileSeparator = "/";

                private $http:ng.IHttpService;
                private $q:ng.IQService;
                private ProxyService: TacZ.Interface.Service.IProxy;

                constructor($http:ng.IHttpService, $q:ng.IQService, ProxyService:TacZ.Interface.Service.IProxy) {
                    this.$http = $http;
                    this.$q = $q;
                    this.ProxyService = ProxyService;
                }

                public Get(region:string):ng.IPromise<any> {
                    return this.GetRegion(region)
                        .then(this.ProxyService.Func(this, this.GetBuildings))
                        .then(this.ProxyService.Func(this, this.GetRoads))
                        .then(this.ProxyService.Func(this,this.GetImage));
                }

                private GetRegion(region:string):any {
                    return this.$http.get(this.CreateRegionJsonString(region))
                        .then((response) => {
                            return new TacZ.Model.Region().Validate(response.data);
                        });
                }

                private GetImage(region:TacZ.Interface.Model.IRegion) : any{
                    if (region.hasOwnProperty("Image") && region.Image) {
                        var image = new TacZ.Model.TacImage();
                        image.Image.src = this.CreateRegionPngString(region.GetId());
                        region.Image = image;
                        return region;
                    }
                }


                private GetBuildings(region:TacZ.Interface.Model.IRegion):ng.IPromise<TacZ.Interface.Model.IRegion> {
                    var def = this.$q.defer<TacZ.Interface.Model.IRegion>();
                    if (region.hasOwnProperty("Buildings") && angular.isArray(region.Buildings)) {
                        this.$http.get(this.CreateRegionBuildingsJsonString(region.GetId())).then((response) => {
                            if (response.data.hasOwnProperty("Buildings") && angular.isArray(response.data.Buildings)) {
                                region.Buildings = new TacZ.Util.List<TacZ.Interface.Model.IBuilding>(response.data.Buildings);
                                def.resolve(region);
                            }
                        });
                    } else {
                        def.resolve(region);
                    }
                    return def.promise;
                }

                private GetRoads(region:TacZ.Interface.Model.IRegion):ng.IPromise<TacZ.Interface.Model.IRegion> {
                    var def = this.$q.defer<TacZ.Interface.Model.IRegion>();
                    if (region.hasOwnProperty("Roads") && angular.isArray(region.Roads)) {
                        this.$http.get(this.CreateRegionRoadsJsonString(region.GetId()))
                            .then((response) => {
                                if (response.data.hasOwnProperty("Roads") && angular.isArray(response.data.Roads)) {
                                    region.Roads = new TacZ.Util.List<TacZ.Interface.Model.IRoad>(response.data.Roads)
                                    def.resolve(region);
                                }
                            });
                    } else {
                        def.resolve(region)
                    }
                    return def.promise;
                }

                public CreateRegionJsonString(region:string) {
                    return this.Location + region + this.FileSeparator + region + this.Json
                }

                public CreateRegionBuildingsJsonString(region:string) {
                    return this.Location + region + this.FileSeparator + region + this.Buildings + this.Json;
                }

                public CreateRegionRoadsJsonString(region:string) {
                    return this.Location + region + this.FileSeparator + region + this.Roads + this.Json;
                }

                public CreateRegionPngString(region:string) {
                    return this.Location + region + this.FileSeparator + region + this.Map + this.Png;
                }
            }
        }
    }
}
angular.module("TacZ").service("RegionLoaderService", TacZ.Service.RegionLoader.Loader);