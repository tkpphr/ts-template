import TestModule from "../main/testmodule";

describe("TestModule", () => {
    it("Constructor Test", () => {
        const testmodule = new TestModule("Foo");
        expect(testmodule.name).toBe("Foo");
    });

});
