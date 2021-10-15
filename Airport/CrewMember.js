class CrewMember {
    constructor(name, position, staffNumber) {
        this.name = name
        this.position = position
        if (isNaN(staffNumber)) {
            throw new Error("Staff number NaN")
        } 
        else {
            this.staffNumber = staffNumber
        }
        this.bags = []
    }
    addBag(bag) {
        this.bags.push(bag)
    }   
}

module.exports = CrewMember