describe("List<T>", function () {
    var list;
    beforeEach(function () {
        list = new TacZ.Util.List();
    });

    describe("Push", function () {
        it("Should allow for chaining", function () {
            console.log(typeof list);
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
//# sourceMappingURL=List.spec.js.map
