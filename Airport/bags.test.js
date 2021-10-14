// Import classes for jest testing
const Bag = require("./Bags")
const Passenger = require("./Passenger")
// Bag class testing block
describe("Bag class", () => {
    // Create new instance of Bag class for testing purposes
    beforeAll( () => {
        bag = new Bag(8)
    })
    // Test that correct Error is thrown when no weight is given to Bag() instance
    test("Should throw error for bag with no weight", () => {
        expect(() => new Bag()).toThrowError("bag must have weight")
    })
    // Test that Bag() instance is given correct weight
    test("Should give bag weight", () => {
        expect(bag.weight).toBe(8)
    })
    // Test that if weight is above limit 40kg, .isOverLimit() returns true
    test("Should return true if bag is over limit", () => {
        expect(bag.isOverLimit()).toBe(false)
    })
})

describe("Passenger class", () => {
    beforeAll( () => {
        pass1 = new Passenger("John Doe", 1234, 43)
    })
    test("Should give passenger's seat number", () => {
        expect(pass1.seatNumber).toBe(43)
    })
})

describe("Passenger int. with Bag class", () => {
    beforeAll( () => {
        pass2 = new Passenger("John Doe", 1234, 43)
        pass2.addBag(new Bag(8))
    })
    
    test("Should give weight of passenger's first bag", () => {
        expect(pass2.bags[0].weight).toBe(8)
    })
})
