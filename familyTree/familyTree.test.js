const { Person, genArrayMaker, parArrayMaker } = require("./familyTree.js");


const royalFamily = [
    [["King George VI", []], ["Queen Elizabeth", []]],
    [["Prince Philip", []], ["Queen Elizabeth II", []], ["Princess Margaret", []]],
    [["Camila", []], ["Charles", []], ["Diana", []], ["Anne", []], ["Prince Edward", []], ["Prince Andrew", []]]]


var newarrays = []




describe("Family Tree", () => {
    test.skip("Should return the .name attribute which was input as 'John Doe'", () => {
        expect(new Person("John Doe", [new Person("Paul Doe"), new Person("Sarah Smith")]).name).toBe("John Doe")
    })
})

