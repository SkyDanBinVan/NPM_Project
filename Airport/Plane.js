class Plane {
    constructor(type) {
        this.type = type
        this.crewMember = []
        this.passengers = []
    }
    board(passenger) {
        this.passengers.push(passenger)
    }
    boardCrew(crewMember) {
        this.crewMember.push(crewMember)
    }
}

module.exports = Plane