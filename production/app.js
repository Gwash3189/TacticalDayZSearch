angular.module("TacZ", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    var states = new TacZ.States.States();
    states.List.Items.map(function (state) {
        $stateProvider.state(state);
    });
    $urlRouterProvider.otherwise("/");
});
var TacZ;
(function (TacZ) {
    (function (Util) {
        var String = (function () {
            function String() {
            }
            String.Empty = "";
            return String;
        })();
        Util.String = String;
    })(TacZ.Util || (TacZ.Util = {}));
    var Util = TacZ.Util;
})(TacZ || (TacZ = {}));
var TacZ;
(function (TacZ) {
    (function (Model) {
        var Base = (function () {
            function Base() {
            }
            Base.prototype.Validate = function (info) {
                var results = [];
                for (var key in info) {
                    if (key !== "constructor" && typeof info[key] !== "function") {
                        if (this.Evaluate && typeof this.Evaluate === "function") {
                            if (this.hasOwnProperty(key)) {
                                results.push(this.Evaluate(info, key));
                            } else {
                                results.push(false);
                            }
                        } else {
                            results.push(true);
                        }
                    }
                }
                return results.indexOf(false) <= -1;
            };

            Base.prototype.Assign = function (info) {
                for (var key in info) {
                    if (this.hasOwnProperty(key)) {
                        this[key] = info[key];
                    }
                }
            };

            Base.prototype.Evaluate = function (objectToCompare, toComparekey) {
                if (objectToCompare[toComparekey] instanceof Array && this[toComparekey] instanceof Array) {
                    return true;
                }
                if (typeof this[toComparekey] === "object" && typeof objectToCompare[toComparekey] === "object") {
                    return this.Validate.call(this[toComparekey], objectToCompare[toComparekey]);
                }
                return typeof this[toComparekey] === typeof objectToCompare[toComparekey];
            };
            return Base;
        })();
        Model.Base = Base;
    })(TacZ.Model || (TacZ.Model = {}));
    var Model = TacZ.Model;
})(TacZ || (TacZ = {}));
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TacZ;
(function (TacZ) {
    (function (Util) {
        var List = (function (_super) {
            __extends(List, _super);
            function List(list) {
                _super.call(this);
                this.Items = new Array();
                if (list) {
                    this.Items = list;
                }
            }
            List.prototype.Push = function (item) {
                this.Items.push(item);
                return this;
            };

            List.prototype.PushRange = function (list) {
                this.Items.push.apply(this.Items, list);
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
        })(TacZ.Model.Base);
        Util.List = List;
    })(TacZ.Util || (TacZ.Util = {}));
    var Util = TacZ.Util;
})(TacZ || (TacZ = {}));
var TacZ;
(function (TacZ) {
    (function (Model) {
        var TacImage = (function (_super) {
            __extends(TacImage, _super);
            function TacImage() {
                _super.call(this);
                this.Image = new Image();
            }
            return TacImage;
        })(Model.Base);
        Model.TacImage = TacImage;
    })(TacZ.Model || (TacZ.Model = {}));
    var Model = TacZ.Model;
})(TacZ || (TacZ = {}));
var TacZ;
(function (TacZ) {
    (function (Model) {
        var Region = (function (_super) {
            __extends(Region, _super);
            function Region(Name, Id) {
                _super.call(this);
                this.Id = TacZ.Util.String.Empty;
                this.Cities = new TacZ.Util.List();
                this.Buildings = new TacZ.Util.List();
                this.Roads = new TacZ.Util.List();
                this.Name = TacZ.Util.String.Empty;
                this.Description = TacZ.Util.String.Empty;
                this.Image = new TacZ.Model.TacImage();
                this.Name = Name || this.Name;
                this.Id = Id || this.Id;
            }
            Region.prototype.GetId = function () {
                return this.Id;
            };

            Region.prototype.SetId = function (id) {
                this.Id = id;
            };
            return Region;
        })(TacZ.Model.Base);
        Model.Region = Region;
    })(TacZ.Model || (TacZ.Model = {}));
    var Model = TacZ.Model;
})(TacZ || (TacZ = {}));
var TacZ;
(function (TacZ) {
    (function (Controller) {
        (function (Search) {
            var FrequentlySearchedController = (function () {
                function FrequentlySearchedController($scope) {
                    this.FrequentlySearchedList = new TacZ.Util.List([
                        new TacZ.Model.Region("North East Air Field", "neaf")
                    ]);
                    $scope.vm = this;
                }
                return FrequentlySearchedController;
            })();
            Search.FrequentlySearchedController = FrequentlySearchedController;
        })(Controller.Search || (Controller.Search = {}));
        var Search = Controller.Search;
    })(TacZ.Controller || (TacZ.Controller = {}));
    var Controller = TacZ.Controller;
})(TacZ || (TacZ = {}));
angular.module("TacZ").controller("FrequentlySearchedController", TacZ.Controller.Search.FrequentlySearchedController);
var TacZ;
(function (TacZ) {
    (function (Controller) {
        (function (Search) {
            var ResultsController = (function () {
                function ResultsController($scope, $stateParams, RegionLoaderService) {
                    var _this = this;
                    this.Region = new TacZ.Model.Region();
                    $scope.vm = this;
                    RegionLoaderService.Get($stateParams.rid).then(function (data) {
                        _this.Region = data;
                    });
                }
                return ResultsController;
            })();
            Search.ResultsController = ResultsController;
        })(Controller.Search || (Controller.Search = {}));
        var Search = Controller.Search;
    })(TacZ.Controller || (TacZ.Controller = {}));
    var Controller = TacZ.Controller;
})(TacZ || (TacZ = {}));
angular.module("TacZ").controller("ResultsController", TacZ.Controller.Search.ResultsController);
var TacZ;
(function (TacZ) {
    (function (Controller) {
        (function (Search) {
            var SearchController = (function () {
                function SearchController($scope) {
                    $scope.vm = this;
                }
                return SearchController;
            })();
            Search.SearchController = SearchController;
        })(Controller.Search || (Controller.Search = {}));
        var Search = Controller.Search;
    })(TacZ.Controller || (TacZ.Controller = {}));
    var Controller = TacZ.Controller;
})(TacZ || (TacZ = {}));
angular.module("TacZ").controller("SearchController", TacZ.Controller.Search.SearchController);
var TacZ;
(function (TacZ) {
    (function (Definition) {
        var RegionsDefinition = (function () {
            function RegionsDefinition() {
                this.List = new TacZ.Util.List();
                this.List.Push(this.CreateRegion("neaf"));
            }
            RegionsDefinition.prototype.CreateRegion = function (id) {
                var region = new TacZ.Model.Region();
                region.SetId(id);
                return region;
            };
            return RegionsDefinition;
        })();
        Definition.RegionsDefinition = RegionsDefinition;
    })(TacZ.Definition || (TacZ.Definition = {}));
    var Definition = TacZ.Definition;
})(TacZ || (TacZ = {}));
angular.module("TacZ").constant("RegionsDefinition", new TacZ.Definition.RegionsDefinition());
var TacZ;
(function (TacZ) {
    (function (Model) {
        var Building = (function (_super) {
            __extends(Building, _super);
            function Building() {
                _super.call(this);
                this.Name = "";
                this.Description = "";
                this.Id = -1;
            }
            Building.prototype.GetId = function () {
                return this.Id;
            };
            return Building;
        })(TacZ.Model.Base);
        Model.Building = Building;
    })(TacZ.Model || (TacZ.Model = {}));
    var Model = TacZ.Model;
})(TacZ || (TacZ = {}));
var TacZ;
(function (TacZ) {
    (function (Model) {
        var City = (function (_super) {
            __extends(City, _super);
            function City() {
                _super.call(this);
                this.Name = "";
                this.Description = "";
                this.Id = -1;
            }
            City.prototype.GetId = function () {
                return this.Id;
            };
            return City;
        })(TacZ.Model.Base);
        Model.City = City;
    })(TacZ.Model || (TacZ.Model = {}));
    var Model = TacZ.Model;
})(TacZ || (TacZ = {}));
var TacZ;
(function (TacZ) {
    (function (Model) {
        var Road = (function (_super) {
            __extends(Road, _super);
            function Road() {
                _super.call(this);
                this.Name = "";
                this.Description = "";
                this.Buildings = new TacZ.Util.List();
                this.Id = -1;
            }
            return Road;
        })(TacZ.Model.Base);
        Model.Road = Road;
    })(TacZ.Model || (TacZ.Model = {}));
    var Model = TacZ.Model;
})(TacZ || (TacZ = {}));
var TacZ;
(function (TacZ) {
    (function (Model) {
        var State = (function () {
            function State(Name, Route, resolve) {
                this.TemplateLocation = "Template";
                this.TemplateFileExtension = ".html";
                this.TemplateFilePathSeperator = "/";
                this.ControllerSuffix = "Controller";
                this.name = Name;
                this.templateUrl = this.TemplateLocation + this.TemplateFilePathSeperator + this.name + this.TemplateFileExtension;
                this.url = Route;
                this.controller = this.MakeFirstLetterUpperCase(this.name);
                this.resolve = resolve;
                this.parent = this.GetParentFromName(this.name);
            }
            State.prototype.GetParentFromName = function (name) {
                var result = name.split(".")[0];
                if (result === name) {
                    return undefined;
                }
                return result;
            };

            State.prototype.GetChildFromName = function (name) {
                var split = name.split(".");
                return split[split.length - 1];
            };

            State.prototype.MakeFirstLetterUpperCase = function (name) {
                var controllerName = this.GetChildFromName(name);
                return controllerName.substr(0, 1).toUpperCase() + controllerName.substr(1, controllerName.length) + this.ControllerSuffix;
            };
            return State;
        })();
        Model.State = State;
    })(TacZ.Model || (TacZ.Model = {}));
    var Model = TacZ.Model;
})(TacZ || (TacZ = {}));
var TacZ;
(function (TacZ) {
    (function (Service) {
        (function (RegionLoader) {
            var Loader = (function () {
                function Loader($http, $q, ProxyService) {
                    this.Location = "Region/";
                    this.Buildings = "-buildings";
                    this.Roads = "-roads";
                    this.Json = ".json";
                    this.Png = ".png";
                    this.Map = "-map";
                    this.FileSeparator = "/";
                    this.$http = $http;
                    this.$q = $q;
                    this.ProxyService = ProxyService;
                }
                Loader.prototype.Get = function (region) {
                    return this.GetRegion(region).then(this.ProxyService.Func(this, this.GetBuildings)).then(this.ProxyService.Func(this, this.GetRoads)).then(this.ProxyService.Func(this, this.GetImage));
                };

                Loader.prototype.GetRegion = function (region) {
                    return this.$http.get(this.CreateRegionJsonString(region)).then(function (response) {
                        var region = new TacZ.Model.Region();
                        if (region.Validate(response.data)) {
                            region.Assign(response.data);
                        }
                        return region;
                    });
                };

                Loader.prototype.GetImage = function (region) {
                    if (region.hasOwnProperty("Image") && region.Image) {
                        var image = new TacZ.Model.TacImage();
                        image.Image.src = this.CreateRegionPngString(region.GetId());
                        region.Image = image;
                        return region;
                    }
                };

                Loader.prototype.GetBuildings = function (region) {
                    var def = this.$q.defer();
                    if (region.hasOwnProperty("Buildings") && angular.isArray(region.Buildings)) {
                        this.$http.get(this.CreateRegionBuildingsJsonString(region.GetId())).then(function (response) {
                            if (response.data.hasOwnProperty("Buildings") && angular.isArray(response.data.Buildings)) {
                                region.Buildings = new TacZ.Util.List(response.data.Buildings);
                                def.resolve(region);
                            }
                        });
                    } else {
                        def.resolve(region);
                    }
                    return def.promise;
                };

                Loader.prototype.GetRoads = function (region) {
                    var def = this.$q.defer();
                    if (region.hasOwnProperty("Roads") && angular.isArray(region.Roads)) {
                        this.$http.get(this.CreateRegionRoadsJsonString(region.GetId())).then(function (response) {
                            if (response.data.hasOwnProperty("Roads") && angular.isArray(response.data.Roads)) {
                                region.Roads = new TacZ.Util.List(response.data.Roads);
                                def.resolve(region);
                            }
                        });
                    } else {
                        def.resolve(region);
                    }
                    return def.promise;
                };

                Loader.prototype.CreateRegionJsonString = function (region) {
                    return this.Location + region + this.FileSeparator + region + this.Json;
                };

                Loader.prototype.CreateRegionBuildingsJsonString = function (region) {
                    return this.Location + region + this.FileSeparator + region + this.Buildings + this.Json;
                };

                Loader.prototype.CreateRegionRoadsJsonString = function (region) {
                    return this.Location + region + this.FileSeparator + region + this.Roads + this.Json;
                };

                Loader.prototype.CreateRegionPngString = function (region) {
                    return this.Location + region + this.FileSeparator + region + this.Map + this.Png;
                };
                return Loader;
            })();
            RegionLoader.Loader = Loader;
        })(Service.RegionLoader || (Service.RegionLoader = {}));
        var RegionLoader = Service.RegionLoader;
    })(TacZ.Service || (TacZ.Service = {}));
    var Service = TacZ.Service;
})(TacZ || (TacZ = {}));
angular.module("TacZ").service("RegionLoaderService", TacZ.Service.RegionLoader.Loader);
var TacZ;
(function (TacZ) {
    (function (Service) {
        var Proxy = (function () {
            function Proxy() {
            }
            Proxy.prototype.Func = function (context, func) {
                return function () {
                    return func.apply(context, arguments);
                };
            };
            return Proxy;
        })();
        Service.Proxy = Proxy;
    })(TacZ.Service || (TacZ.Service = {}));
    var Service = TacZ.Service;
})(TacZ || (TacZ = {}));

angular.module("TacZ").service("ProxyService", TacZ.Service.Proxy);
var TacZ;
(function (TacZ) {
    (function (_States) {
        var States = (function () {
            function States() {
                this.List = new TacZ.Util.List();
                this.List.Push(new TacZ.Model.State("Search", "/")).Push(new TacZ.Model.State("Search.Results", 'Results/:rid'));
            }
            return States;
        })();
        _States.States = States;
    })(TacZ.States || (TacZ.States = {}));
    var States = TacZ.States;
})(TacZ || (TacZ = {}));
