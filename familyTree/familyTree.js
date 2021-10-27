// Assign variables (grouping each generation and their parents into arrays)
let gen1 = []
let par1 = []
let gen2 = []
let par2 = []
let gen3 = []
// Create array linking each memeber to their relative parent groups
const royalFamily = [
    [["King George VI", []], ["Queen Elizabeth", []]],
    [["Prince Philip", []], ["Queen Elizabeth II", par1], ["Princess Margaret", par1]],
    [["Camila", []], ["Charles", par2], ["Diana", []], ["Anne", par2], ["Prince Edward", par2], ["Prince Andrew", par2]]
];
// Create class for making royal family objects.
class Person {
    // Constructor contains two parameters.
    constructor(name, parents) {
        // Two attributes are made from these parameters.
        this.name = name;
        this.parents = parents;
    };
    // Class method attempts to join .parents attribute into a string, else retuns "No known parents".
    childOf = () => this.parents.map((parent) => parent.name).join(" & ") || "No known parents";
};
// Create function generating members of family into their arrays as objects
function genArrayMaker(generation, genName) {
    generation.forEach(element => {
        genName.push(new Person(element[0],element[1]))
    })
}
// Create function appending parent objects into parent arrays
function parArrayMaker(gen, parents, parName) {
    parents.forEach(element => {
        parName.push(gen.find((person) => person.name === element))
    })
}
// First generation array is created with two Person objects.
genArrayMaker(royalFamily[0], gen1)
// Adding Parents to Par1 array.
parArrayMaker(gen1, ["King George VI", "Queen Elizabeth"], par1)
// Second generation array is created with three Person objects.
genArrayMaker(royalFamily[1], gen2)
// Adding Parents to Par2 array.
parArrayMaker(gen2, ["Prince Philip", "Queen Elizabeth II"], par2)
// Third generation array is created with six Person objects.
genArrayMaker(royalFamily[2], gen3)

const familyTreeObj = [gen1, gen2, gen3]

console.log(familyTreeObj[2][1].name)

module.exports =  Person, genArrayMaker, parArrayMaker 