///<reference path="../../_tests.ts" />

describe("States", () => {

    var state;
    beforeEach(()=> {
        state = new TacZ.States.States();
    });

    it("Should have two states", () => {
        expect(state.List.Items.length).toBe(2);
    });

//    it("Should have a root route", () => {
//        var result = state.List.Search("Name", "root");
//        expect(result.Items.length).toBe(1);
//        expect(result.Items[0].name).toBe("root");
//        expect(result.Items[0].templateUrl).toBe("Search/Search.html");
//        expect(result.Items[0].url).toBe("/");
//
//    });
//
//    it("Should have a results route", () => {
//        expect(state.List.Search("Name", "results").Items.length).toEqual(1);
//    });
});