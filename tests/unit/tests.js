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
        })();
        Util.List = List;
    })(TacZ.Util || (TacZ.Util = {}));
    var Util = TacZ.Util;
})(TacZ || (TacZ = {}));
var TacZ;
(function (TacZ) {
    (function (Model) {
        var Region = (function () {
            function Region(Name, Id) {
                this.Name = Name;
                this.Id = Id;
            }
            Region.prototype.Validate = function (obj) {
                if (obj.hasOwnProperty("Id") && obj.hasOwnProperty("Cities") && obj.hasOwnProperty("Buildings") && obj.hasOwnProperty("Roads") && obj.hasOwnProperty("Name") && obj.hasOwnProperty("Description") && obj.hasOwnProperty("Image")) {
                    this.Id = obj.Id;
                    this.Cities = obj.Cities;
                    this.Buildings = obj.Buildings;
                    this.Roads = obj.Roads;
                    this.Name = obj.Name;
                    this.Description = obj.Description;
                    this.Image = new TacZ.Model.TacImage();
                }
                return this;
            };

            Region.prototype.GetId = function () {
                return this.Id;
            };

            Region.prototype.SetId = function (id) {
                this.Id = id;
            };
            return Region;
        })();
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
                function ResultsController($scope) {
                    $scope.vm = this;
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
                function SearchController($scope, RegionLoaderService) {
                    $scope.vm = this;
                    $scope.vm.neaf = {};
                    RegionLoaderService.Get("neaf").then(function (data) {
                        console.log(data.Image);
                        $scope.vm.neaf = data;
                    });
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
        var Regions = (function () {
            function Regions() {
                this.List = new TacZ.Util.List();
                this.List.Push(this.CreateRegion("neaf"));
            }
            Regions.prototype.CreateRegion = function (id) {
                var region = new TacZ.Model.Region();
                region.SetId(id);
                return region;
            };
            return Regions;
        })();
        Definition.Regions = Regions;
    })(TacZ.Definition || (TacZ.Definition = {}));
    var Definition = TacZ.Definition;
})(TacZ || (TacZ = {}));
angular.module("TacZ").constant("Regions", new TacZ.Definition.Regions());
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
            }
            State.prototype.MakeFirstLetterUpperCase = function (thing) {
                return thing.substr(0, 1).toUpperCase() + thing.substr(1, thing.length) + this.ControllerSuffix;
            };
            return State;
        })();
        Model.State = State;
    })(TacZ.Model || (TacZ.Model = {}));
    var Model = TacZ.Model;
})(TacZ || (TacZ = {}));
var TacZ;
(function (TacZ) {
    (function (Model) {
        var TacImage = (function () {
            function TacImage() {
                this.Image = new Image();
            }
            return TacImage;
        })();
        Model.TacImage = TacImage;
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
                        return new TacZ.Model.Region().Validate(response.data);
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
                this.List.Push(new TacZ.Model.State("Search", "/")).Push(new TacZ.Model.State("Results", '/Results/:rid'));
            }
            return States;
        })();
        _States.States = States;
    })(TacZ.States || (TacZ.States = {}));
    var States = TacZ.States;
})(TacZ || (TacZ = {}));
describe("States", function () {
    var state;
    beforeEach(function () {
        state = new TacZ.States.States();
    });
});
describe("FrequentlySearchedController", function () {
    var fSController;
    beforeEach(function () {
        fSController = new TacZ.Controller.Search.FrequentlySearchedController({});
    });

    it("Should have a list of Frequently Searched Regions", function () {
        expect(fSController.FrequentlySearchedList).toBeTruthy();
    });
});
describe("List<T>", function () {
    var list;
    beforeEach(function () {
        list = new TacZ.Util.List();
    });

    describe("Push", function () {
        it("Should allow for chaining", function () {
            expect(list.Push("") instanceof TacZ.Util.List).toBe(true);
        });
    });

    describe("Remove", function () {
        it("Should remove an item by Id", function () {
            list.Push({ Id: 1 });
            list.Remove('Id', 1);
            expect(list.Items.length).toBe(0);
        });

        it("Should return the index the item was at", function () {
            list.Push({ Id: 1 });
            var result = list.Remove('Id', 1);
            expect(result).toBe(0);
        });
    });

    describe("RemoveBy", function () {
        it("Should remove an item when the callback returns true", function () {
            list.Push({ Id: 1 });
            list.RemoveBy(function (x) {
                return x.Id === 1;
            });
            expect(list.Items.length).toBe(0);
        });

        it("Should return the index the item was at", function () {
            list.Push({ Id: 1 });
            expect(list.RemoveBy(function (x) {
                return x.Id === 1;
            })).toBe(0);
        });

        it("Should call the passed in callback", function () {
            var obj = {};
            obj.callback = function (x) {
                return x.Id === 1;
            };
            var spy = spyOn(obj, "callback").and.callThrough();

            list.Push({ Id: 1 });
            list.RemoveBy(obj.callback);

            expect(spy).toHaveBeenCalled();
        });
    });
    describe("GetIndex", function () {
        it("Should return the index of the item", function () {
            list.Push({ Id: 1 });
            expect(list.GetIndex("Id", 1)).toBe(0);
        });
    });

    describe("GetIndexBy", function () {
        it("Should return the index of the item", function () {
            list.Push({ Id: 1 });
            expect(list.GetIndexBy(function (x) {
                return x.Id === 1;
            })).toBe(0);
        });
        it("Should call the passed in callback", function () {
            var obj = {};
            obj.callback = function (x) {
                return x.Id === 1;
            };
            list.Push({ Id: 1 });
            var spy = spyOn(obj, "callback").and.callThrough();
            list.GetIndexBy(obj.callback);
            expect(spy).toHaveBeenCalled();
        });
    });

    describe("Search", function () {
        it("Should return an array of items that match the criteria", function () {
            list.Push({ Id: 1, Name: "Derp" }, { Id: 1, Name: "Herp" });
            expect(list.Search("Name", "Derp").Items.length).toBe(1);
        });
    });

    describe("SearchBy", function () {
        it("Should return an array of items that match the criteria in the callback", function () {
            list.Push({ Id: 1, Name: "Derp" }, { Id: 1, Name: "Herp" });
            expect(list.SearchBy(function (x) {
                return x.Name === "Derp";
            }).Items.length).toBe(1);
        });
    });

    describe("Get", function () {
        it("Should get the item at the specified index", function () {
            list.Push({ Id: 1 });
            expect(list.GetItemAtIndex(0)).toBeTruthy();
            expect(list.GetItemAtIndex(0).Id).toEqual(1);
        });
    });
});
//# sourceMappingURL=tests.js.map
