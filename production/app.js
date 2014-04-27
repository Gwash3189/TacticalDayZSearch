angular.module("TacZ", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    var states = new TacZ.States.States();
    states.List.Items.map(function (state) {
        $stateProvider.state(state);
    });

    $urlRouterProvider.otherwise("/");
});
var TacZ;
(function (TacZ) {
    (function (Model) {
        var State = (function () {
            function State(name, templateUrl, url, controller, resolve) {
                this.name = name;
                this.templateUrl = templateUrl;
                this.url = url;
                this.controller = controller;
            }
            return State;
        })();
        Model.State = State;
    })(TacZ.Model || (TacZ.Model = {}));
    var Model = TacZ.Model;
})(TacZ || (TacZ = {}));
var TacZ;
(function (TacZ) {
    (function (_States) {
        var States = (function () {
            function States() {
                this.List = new TacZ.Util.List();
                this.List.Push(new TacZ.Model.State("root", "Template/Search.html", "/", "SearchController"));
            }
            return States;
        })();
        _States.States = States;
    })(TacZ.States || (TacZ.States = {}));
    var States = TacZ.States;
})(TacZ || (TacZ = {}));
var TacZ;
(function (TacZ) {
    (function (Util) {
        var List = (function () {
            function List(list) {
                if (list) {
                    this.Items = list;
                } else {
                    this.Items = new Array();
                }
            }
            List.prototype.Push = function (item) {
                this.Items.push(item);
            };

            List.prototype.Remove = function (prop, value) {
                var result = this.GetIndex(prop, value);
                if (result === -1) {
                    return result;
                } else {
                    this.Items.splice(result, 1);
                    return result;
                }
            };

            List.prototype.RemoveBy = function (callback) {
                var result = this.GetIndexBy(callback);
                if (result === -1) {
                    return result;
                } else {
                    this.Items.splice(result, 1);
                    return result;
                }
            };

            List.prototype.GetIndex = function (prop, value) {
                for (var i = 0; i < this.Items.length; i++) {
                    if (this.Items[i][prop] === value) {
                        return i;
                    }
                }
                return -1;
            };

            List.prototype.GetIndexBy = function (callback) {
                for (var i = 0; i < this.Items.length; i++) {
                    if (callback(this.Items[i])) {
                        return i;
                    }
                }
                return -1;
            };

            List.prototype.Search = function (prop, value) {
                var tmp = new TacZ.Util.List();
                this.Items.map(function (item) {
                    if (item[prop] === value) {
                        tmp.Push(item);
                    }
                });
                return tmp;
            };

            List.prototype.SearchBy = function (callback) {
                var tmp = new TacZ.Util.List();
                this.Items.map(function (item) {
                    if (callback(item)) {
                        tmp.Push(item);
                    }
                });
                return tmp;
            };

            List.prototype.GetItemAtIndex = function (index) {
                return this.Items[index];
            };
            return List;
        })();
        Util.List = List;
    })(TacZ.Util || (TacZ.Util = {}));
    var Util = TacZ.Util;
})(TacZ || (TacZ = {}));
var TacZ;
(function (TacZ) {
    (function (Model) {
        var Building = (function () {
            function Building(Name, Description, Id) {
                this.Name = Name;
                this.Description = Description;
                this.Id = Id;
            }
            Building.prototype.GetId = function () {
                return this.Id;
            };
            return Building;
        })();
        Model.Building = Building;
    })(TacZ.Model || (TacZ.Model = {}));
    var Model = TacZ.Model;
})(TacZ || (TacZ = {}));
var TacZ;
(function (TacZ) {
    (function (Model) {
        var City = (function () {
            function City(Name, Description, Buildings, Id) {
                this.Name = Name;
                this.Description = Description;
                this.Buildings = Buildings;
                this.Id = Id;
            }
            City.prototype.GetId = function () {
                return this.Id;
            };
            return City;
        })();
        Model.City = City;
    })(TacZ.Model || (TacZ.Model = {}));
    var Model = TacZ.Model;
})(TacZ || (TacZ = {}));
var TacZ;
(function (TacZ) {
    (function (Model) {
        var Region = (function () {
            function Region(Id, Cities, Buildings, Roads, Name, Description, ImgLocation) {
                this.Id = Id;
                this.Cities = Cities;
                this.Buildings = Buildings;
                this.Roads = Roads;
                this.Name = Name;
                this.Description = Description;
                this.ImgLocation = ImgLocation;
            }
            return Region;
        })();
        Model.Region = Region;
    })(TacZ.Model || (TacZ.Model = {}));
    var Model = TacZ.Model;
})(TacZ || (TacZ = {}));
var TacZ;
(function (TacZ) {
    (function (RegionLoader) {
        var Loader = (function () {
            function Loader($http) {
                this.Location = "Region/";
                this.Json = ".json";
                this.Png = ".png";
                this.FileSeperator = "/";
                this.$http = $http;
            }
            Loader.prototype.Get = function (region) {
                var _this = this;
                debugger;
                return this.$http.get(this.CreateRegionJsonString(region)).then(function (result) {
                    debugger;
                    var data = result.data;
                    result.data = new TacZ.Model.Region(data.Id, new TacZ.Util.List(data.Cities), new TacZ.Util.List(data.Buildings), new TacZ.Util.List(), data.Name, data.Description, _this.CreateRegionPngString(region));
                    return result.data;
                });
            };

            Loader.prototype.CreateRegionJsonString = function (region) {
                return this.Location + region + this.FileSeperator + region + this.Json;
            };

            Loader.prototype.CreateRegionPngString = function (region) {
                return this.Location + region + this.FileSeperator + region + this.Png;
            };
            return Loader;
        })();
        RegionLoader.Loader = Loader;
    })(TacZ.RegionLoader || (TacZ.RegionLoader = {}));
    var RegionLoader = TacZ.RegionLoader;
})(TacZ || (TacZ = {}));
angular.module("TacZ").service("RegionLoaderService", TacZ.RegionLoader.Loader);
var TacZ;
(function (TacZ) {
    (function (Search) {
        (function (Controller) {
            var SearchController = (function () {
                function SearchController($scope, RegionLoaderService) {
                    this.Testing = "Working";
                    $scope.vm = this;
                    $scope.vm.neaf = {};
                    RegionLoaderService.Get("neaf").then(function (data) {
                        $scope.vm.neaf = data;
                    });
                }
                return SearchController;
            })();
            Controller.SearchController = SearchController;
        })(Search.Controller || (Search.Controller = {}));
        var Controller = Search.Controller;
    })(TacZ.Search || (TacZ.Search = {}));
    var Search = TacZ.Search;
})(TacZ || (TacZ = {}));
angular.module("TacZ").controller("SearchController", TacZ.Search.Controller.SearchController);
var TacZ;
(function (TacZ) {
    (function (Model) {
        var Road = (function () {
            function Road(Name, Description, Buildings, Id) {
                this.Name = Name;
                this.Description = Description;
                this.Buildings = Buildings;
                this.Id = Id;
            }
            return Road;
        })();
        Model.Road = Road;
    })(TacZ.Model || (TacZ.Model = {}));
    var Model = TacZ.Model;
})(TacZ || (TacZ = {}));
