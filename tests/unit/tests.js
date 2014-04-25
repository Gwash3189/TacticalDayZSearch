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
            return List;
        })();
        Util.List = List;
    })(TacZ.Util || (TacZ.Util = {}));
    var Util = TacZ.Util;
})(TacZ || (TacZ = {}));
describe("List<T>", function () {
    describe("Remove", function () {
        it("Should remove an item by Id", function () {
            var list = new TacZ.Util.List();
            list.Push({ Id: 1 });
            list.Remove('Id', 1);
            expect(list.Items.length).toBe(0);
        });

        it("Should return the index the item was at", function () {
            var list = new TacZ.Util.List();
            list.Push({ Id: 1 });
            var result = list.Remove('Id', 1);
            expect(result).toBe(0);
        });
    });

    describe("RemoveBy", function () {
        it("Should remove an item when the callback returns true", function () {
            var list = new TacZ.Util.List();
            list.Push({ Id: 1 });
            list.RemoveBy(function (x) {
                return x.Id === 1;
            });
            expect(list.Items.length).toBe(0);
        });

        it("Should return the index the item was at", function () {
            var list = new TacZ.Util.List();
            list.Push({ Id: 1 });
            expect(list.RemoveBy(function (x) {
                return x.Id === 1;
            })).toBe(0);
        });

        it("Should call the passed in callback", function () {
            var list = new TacZ.Util.List();
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
});
//# sourceMappingURL=tests.js.map
