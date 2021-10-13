var newarray = []

newarray.push("poop")

const royalFamily = [
    [["King George VI", []], ["Queen Elizabeth", []]],
    [["Prince Philip", []], ["Queen Elizabeth II", []], ["Princess Margaret", []]],
    [["Camila", []], ["Charles", []], ["Diana", []], ["Anne", []], ["Prince Edward", []]]
];


function genArrayMaker(generation, genName) {
    for (let i = 0; i < generation; i++) {
        genName.push(new Person(generation[i][0],generation[i][1]))
    }
}