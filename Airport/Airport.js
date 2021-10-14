class Airport {
    constructor(name) {
        this.name = name
        this.runway = []
    }
    arrivals(plane) {
        this.runway.push(plane)
    }
}

module.exports = Airport