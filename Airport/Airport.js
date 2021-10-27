class Airport {
    static airports = []
    constructor(name) {
        this.name = name
        this.constructor.airports.push(this)
    }
    static travelCost(distance, plane, currentcostoffuelperlitre) {
        0.01 * 3.5 * plane.currentCapacity.length * distance *currentcostoffuelperlitre
    }
}

module.exports = Airport