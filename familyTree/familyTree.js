class Person {
    constructor(name=String, mother=String, father=String) {
        this.name = name
        this.parents = [mother, father]
        this.childOf = function () {
            return `${mother} & ${father}`
        }
    }
}


familyTree = [new Person("King George VI", "", ""),
new Person("Queen Elizabeth", "", ""),
new Person("Prince Philip", "", ""),
new Person("Queen Elizabeth II", "Queen Elizabeth", "King George VI"),
new Person("Princess Margaret", "Queen Elizabeth", "King George VI"),
new Person("Camila", "", ""),
new Person("Charles", "Queen Elizabeth II", "Prince Philip"),
new Person("Diana", "", ""),
new Person("Anne", "Queen Elizabeth II", "Prince Philip"),
new Person("Prince Andrew", "Queen Elizabeth II", "Prince Philip"),
new Person("Prince Edward", "Queen Elizabeth II", "Prince Philip")]


console.log(familyTree[0])