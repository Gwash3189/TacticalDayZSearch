angular.module("TacZ", []).config(function ($stateProvider, $urlRouterProvider) {
    var States = new TacZ.States.States();
    States.List.Items.map(function (state) {
        $stateProvider.state(state);
    });

    $urlRouterProvider.otherwise("/");
});

var TacZ;
(function (TacZ) {
    (function (_States) {
        var State = (function () {
            function State(name, templateUrl, url) {
                this.name = name;
                this.templateUrl = templateUrl;
                this.url = url;
            }
            return State;
        })();
        _States.State = State;
        var States = (function () {
            function States() {
                this.List = new TacZ.Util.List();
                this.List.Push(new State("root", "Search/Search.html", "/"));
                this.List.Push(new State("results", "Results/Results.html", "/results"));
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
describe("States", function () {
    var state;
    beforeEach(function () {
        state = new TacZ.States.States();
    });

    it("Should have two states", function () {
        expect(state.List.Items.length).toBe(2);
    });

    it("Should have a root route", function () {
        var result = state.List.Search("name", "root");
        expect(result.Items.length).toEqual(1);
        expect(result.GetItemAtIndex(0).name).toBe("root");
        expect(result.GetItemAtIndex(0).url).toBe("/");
    });

    it("Should have a results route", function () {
        var result = state.List.Search("name", "results");
        expect(result.Items.length).toEqual(1);
        expect(result.GetItemAtIndex(0).name).toBe("results");
        expect(result.GetItemAtIndex(0).url).toBe("/results");
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
