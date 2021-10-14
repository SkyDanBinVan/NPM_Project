class CrewMember {
    constructor(name, position, staffNumber) {
        this.name = name
        this.position = position
        this.staffNumber = staffNumber
        this.bags = []
    }
    addBag(bag) {
        this.bags.push(bag)
    }   
}

module.exports = CrewMember