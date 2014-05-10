///<reference path="../../_tests.ts" />

describe("Base Model", () => {


    describe("Validate", () => {
        var City;
        var Region;
        beforeEach(() => {
            City = new TacZ.Model.City();
            Region = new TacZ.Model.Region();
        });

        it("Should return true when an object, with the same properties is passed in", () => {
            var city = new TacZ.Model.City();
            expect(City.Validate(city)).toBe(true);
        });

        it("Should return false when an object without the same properties is passed in", () => {
            var any = {id: "STRING"};
            expect(City.Validate(any)).toBe(false);
        });

        it("Should also validate nested objects", () => {
            var reg = new TacZ.Model.Region();
            expect(Region.Validate(reg)).toBe(true);
        });
    });

    describe("Assign", () => {

        var City;

        beforeEach(() => {
           City = new TacZ.Model.City();
        });
        it("Should assign all keys in the passed in object to the calling object", () => {
            var value = new TacZ.Model.City();
            var Desc = "Desc";
            value.Description = Desc;

            City.Assign(value);

            expect(City.Description).toEqual("Desc");
        });
    });


});