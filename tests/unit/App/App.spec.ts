///<reference path="../../_tests.ts" />

describe("States", () => {

    var state;
    beforeEach(()=> {
        state = new TacZ.States.States();
    });

    it("Should have two states", () => {
        expect(state.List.Items.length).toBe(2);
    });

    it("Should have a root route", () => {
        var result = state.List.Search("name","root");
        expect(result.Items.length).toEqual(1);
        expect(result.GetItemAtIndex(0).name).toBe("root");
        expect(result.GetItemAtIndex(0).url).toBe("/");
    });

    it("Should have a results route", () => {
        var result = state.List.Search("name","results");
        expect(result.Items.length).toEqual(1);
        expect(result.GetItemAtIndex(0).name).toBe("results");
        expect(result.GetItemAtIndex(0).url).toBe("/results");
    });
});