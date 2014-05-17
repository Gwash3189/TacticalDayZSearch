///<reference path="../../_tests.ts" />

describe("FrequentlySearchedController", () => {

    var fSController;
    beforeEach(() => {
        fSController = new TacZ.Controller.Search.FrequentlySearchedController({});
    });

    it("Should have a list of Frequently Searched Regions", () => {
        expect(fSController.FrequentlySearchedList).toBeTruthy();
    });

});