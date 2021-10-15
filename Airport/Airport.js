class Airport {
    static airports = []
    constructor(name) {
        this.name = name
        this.runway = []
        this.constructor.airports.push(this)
    }
    arrivals(plane) {
        this.runway.push(plane)
    }
    static travelCost(distance, plane, currentcostoffuelperlitre) {
        0.01 * 3.5 * plane.currentCapacity.length * distance *currentcostoffuelperlitre
    }
}

module.exports = Airport