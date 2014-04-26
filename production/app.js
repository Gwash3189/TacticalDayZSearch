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
