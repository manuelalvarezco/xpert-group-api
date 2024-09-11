import * as service from "./breeds.service";

describe("Test for Breeds Service", () => {
  describe("Test for findBreeds()", () => {
    test("Should return breeds array", (doneFn: any) => {
      service.findBreeds({}).then((value: any) => {
        expect(value.length).toEqual(5);
      });
      doneFn();
    });
  });
});
