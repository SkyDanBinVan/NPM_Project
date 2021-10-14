// Create class for passenger's bags
class Bag {
    // Add bag weight to class constructor
    constructor(weight) {
        // If no weight (or weight less than or equal to 0) is entered, Error is thrown
        if (weight === undefined || weight <= 0) {
            throw new Error("bag must have weight")
        }
        // If no Errors are thrown, weight is assigned to this.weight
        else {
            this.weight = weight
        }
    }
    isOverLimit() {
        if (this.weight <= 40) {
            return false
        } else {
            return true
        }
    }

}
// Export class for testing
module.exports = Bag