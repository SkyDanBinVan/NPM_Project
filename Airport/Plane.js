class Plane {
    constructor(type) {
        this.type = type
        this.currentCapacity = []
    }
    board(passenger) {
        this.currentCapacity.push(passenger)
    }
    capacity(argument) {
        let printString = ""
        let currentPassenger = []
        let currentCrewMembers = []
        this.currentCapacity.forEach(element => {
            if (element.constructor.name === "Passenger") {
                currentPassenger.push(element)
            }
            if (element.constructor.name === "CrewMember") {
                currentCrewMembers.push(element)
            }
        });
        switch (argument) {
            case 's':
                return {
                    "c": currentCrewMembers.length,
                    "p": currentPassenger.length
                }
            case 'ss':
                printString = `${currentCrewMembers.length} crew members and ${currentPassenger.length} passengers on board`
                return printString
            default:
                printString = `${currentCrewMembers.length} crew members and ${currentPassenger.length} passengers on board\n\nCrew members:\n`
                currentCrewMembers.forEach(element => {
                    printString = printString.concat(`${element.name} (${element.position})\n`)
                })
                printString = printString.concat("\nPassengers:\n")
                currentPassenger.forEach(element => {
                    printString = printString.concat(`${element.name} (${element.seatNumber})\n`)
                })
                return printString
        }
    }
}
module.exports = Plane