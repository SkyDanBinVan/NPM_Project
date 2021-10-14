const { Person, genArrayMaker, parArrayMaker } = require("./familyTree.js");

describe("Family Tree", () => {
    test("Should return the .name attribute which was input as 'John Doe'", () => {
        expect(new Person("John Doe", [new Person("Paul Doe"), new Person("Sarah Smith")]).name).toBe("John Doe")
    })
})

