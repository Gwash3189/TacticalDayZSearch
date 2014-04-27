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
describe("States", function () {
    var state;
    beforeEach(function () {
        state = new TacZ.States.States();
    });
});
describe("List<T>", function () {
    var list;
    beforeEach(function () {
        list = new TacZ.Util.List();
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
