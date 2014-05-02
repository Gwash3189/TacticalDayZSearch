///<reference path='../../_app.ts' />

module TacZ {
    export module Service {
        export module RegionLoader {
            export class Loader implements TacZ.Interface.RegionLoader.IRegionLoader {
                private Location:string = "Region/";
                private Buildings = "-buildings";
                private Roads = "-roads";
                private Json = ".json";
                private Png = ".png";
                private FileSeparator = "/";

                private $http:ng.IHttpService;
                private $q:ng.IQService;

                public Get(region:string):ng.IPromise<any> {
                    var def = this.$q.defer();
                    this.GetRegion(region).then((region:TacZ.Interface.Model.IRegion)=> {
                        this.GetBuildings(region).then((buildings) => {
                            region.Buildings = buildings;
                        }).catch((args) => {
                            def.reject(args);
                        });
                        this.GetRoads(region).then((roads) => {
                            region.Roads = roads;
                        }).catch((args) => {
                            def.reject(args);
                        });
                        def.resolve(region)
                    });
                    return def.promise;
                }

                private GetRegion(region:string):ng.IPromise<any> {
                    return this.$http.get(this.CreateRegionJsonString(region))
                        .then((response) => {
                            return new TacZ.Model.Region().Validate(response.data);
                        });
                }

                private GetRoads(region:TacZ.Interface.Model.IRegion):ng.IPromise<TacZ.Interface.Util.IList<TacZ.Interface.Model.IRoad>> {
                    var def = this.$q.defer();
                    if (region.hasOwnProperty("Roads") && angular.isArray(region.Roads)) {
                        this.$http.get(this.CreateRegionRoadsJsonString(region.GetId()))
                            .then((response) => {
                                if (response.data.hasOwnProperty("Roads")) {
                                    def.resolve(new TacZ.Util.List(response.data.Roads));
                                } else {
                                    def.reject([]);
                                }
                            });
                    }
                    return def.promise;

                }

                private GetBuildings(region:TacZ.Interface.Model.IRegion): ng.IPromise<TacZ.Interface.Util.IList<TacZ.Interface.Model.IBuilding>>{
                    debugger;
                    var def = this.$q.defer();
                    if (region.hasOwnProperty("Buildings") && angular.isArray(region.Buildings)) {
                        this.$http.get(this.CreateRegionBuildingsJsonString(region.GetId())).then((response) => {
                            if (response.data.hasOwnProperty("Buildings")) {
                                def.resolve(new TacZ.Util.List(response.data.Buildings));
                            } else {

                                def.reject([]);
                            }
                        })
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
                    return this.Location + region + this.FileSeparator + region + this.Png
                }

                constructor($http:ng.IHttpService, $q:ng.IQService) {
                    this.$http = $http;
                    this.$q = $q;
                }

            }
        }
    }
}
angular.module("TacZ").service("RegionLoaderService", TacZ.Service.RegionLoader.Loader);