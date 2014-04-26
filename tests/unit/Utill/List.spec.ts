///<reference path="../../_tests.ts" />

describe("List<T>", () => {
    var list;
    beforeEach(() => {
        list = new TacZ.Util.List<any>();
    });

    describe("Remove", () => {
        it("Should remove an item by Id", () => {
            list.Push({Id: 1});
            list.Remove('Id', 1);
            expect(list.Items.length).toBe(0);
        });

        it("Should return the index the item was at", () => {
            list.Push({Id: 1});
            var result = list.Remove('Id', 1);
            expect(result).toBe(0);
        });
    });

    describe("RemoveBy", () => {
        it("Should remove an item when the callback returns true", () => {
            list.Push({Id: 1});
            list.RemoveBy((x) => {
                return x.Id === 1
            });
            expect(list.Items.length).toBe(0);
        });

        it("Should return the index the item was at", () => {
            list.Push({Id: 1});
            expect(list.RemoveBy((x) => {
                return x.Id === 1
            })).toBe(0);
        });

        it("Should call the passed in callback", () => {
            var obj:any = {};
            obj.callback = (x) => {
                return x.Id === 1;
            };
            var spy = spyOn(obj, "callback").and.callThrough();

            list.Push({Id: 1});
            list.RemoveBy(obj.callback);

            expect(spy).toHaveBeenCalled()
        });


    });
    describe("GetIndex", () => {

        it("Should return the index of the item", () => {
            list.Push({Id: 1});
            expect(list.GetIndex("Id", 1)).toBe(0);
        });
    });

    describe("GetIndexBy", () => {
        it("Should return the index of the item", () => {
            list.Push({Id: 1});
            expect(list.GetIndexBy((x) => {
                return x.Id === 1
            })).toBe(0);
        });
        it("Should call the passed in callback", () => {
            var obj:any = {};
            obj.callback = (x) => {
                return x.Id === 1
            };
            list.Push({Id: 1});
            var spy = spyOn(obj, "callback").and.callThrough();
            list.GetIndexBy(obj.callback);
            expect(spy).toHaveBeenCalled();
        });
    });

    describe("Search", () => {
        it("Should return an array of items that match the criteria", () => {
            list.Push({Id: 1, Name: "Derp"}, {Id: 1, Name: "Herp"});
            expect(list.Search("Name", "Derp").Items.length).toBe(1);
        });
    });

    describe("SearchBy", () => {
        it("Should return an array of items that match the criteria in the callback", () => {
            list.Push({Id: 1, Name: "Derp"}, {Id: 1, Name: "Herp"});
            expect(list.SearchBy((x) => {return x.Name === "Derp"}).Items.length).toBe(1);
        });
    });
});