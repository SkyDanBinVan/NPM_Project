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
// First generation array is created with two Person objects.
const gen1 = [
    new Person("King George VI", []),
    new Person("Queen Elizabeth", []),
];
// Adding Parents to Par1 array.
const Par1 = [
    gen1.find((person) => person.name === "King George VI"),
    gen1.find((person) => person.name === "Queen Elizabeth"),
];
// Second generation array is created with three Person objects.
const gen2 = [
    new Person("Prince Philip", []),
    new Person("Queen Elizabeth II", Par1),
    new Person("Princess Margaret", Par1),
];
// Adding Parents to Par2 array.
const Par2 = [
    gen2.find((person) => person.name === "Prince Philip"),
    gen2.find((person) => person.name === "Queen Elizabeth II"),
];
// Third generation array is created with five Person objects.
const gen3 = [
    new Person("Camila", []),
    new Person("Charles", Par2),
    new Person("Diana", []),
    new Person("Anne", Par2),
    new Person("Prince Edward", Par2),
];