///<reference path="../../_tests.ts" />

describe("List<T>", () => {
    describe("Remove", () => {
        it("Should remove an item by Id", () => {
            var list = new TacZ.Util.List<any>();
            list.Push({Id: 1});
            list.Remove('Id', 1);
            expect(list.Items.length).toBe(0);
        });

        it("Should return the index the item was at", () => {
            var list = new TacZ.Util.List<any>();
            list.Push({Id: 1});
            var result = list.Remove('Id', 1);
            expect(result).toBe(0);
        });
    });

    describe("RemoveBy", () => {
        it("Should remove an item when the callback returns true", () => {
            var list = new TacZ.Util.List<any>();
            list.Push({Id: 1});
            list.RemoveBy((x) => {
                return x.Id === 1
            });
            expect(list.Items.length).toBe(0);
        });

        it("Should return the index the item was at", () => {
            var list = new TacZ.Util.List<any>();
            list.Push({Id: 1});
            expect(list.RemoveBy((x) => {
                return x.Id === 1
            })).toBe(0);
        });

        it("Should call the passed in callback", () => {
            var list = new TacZ.Util.List<any>();
            var obj: any= {};
            obj.callback = (x) => {
                return x.Id === 1;
            };

            var spy = spyOn(obj, "callback").and.callThrough();
            list.Push({Id: 1});
            list.RemoveBy(obj.callback);
            expect(spy).toHaveBeenCalled()
        });
    });
});