// Create Passenger class
class Passenger {
    // Add passsenger name, passport number and seat number to constructor
    constructor(name, passportNumber, seatNumber) {
        // Allocate attributes
        this.name = name
        this.passportNumber = passportNumber
        this.seatNumber = seatNumber
        this.bags = []
    }
    // Create addBag() method, used to add bag objects to passenger object attribute this.bags
    addBag(bag) {
        this.bags.push(bag)
    }
}
// Export Passenger() class
module.exports = Passenger