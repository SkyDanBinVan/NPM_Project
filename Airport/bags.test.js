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
// Passenger class testing block
describe("Passenger class", () => {
    // Create new instance of Passenger class for testing purposes
    beforeAll( () => {
        pass = new Passenger("John Doe", 1234, 43)
    })
    // Test that correct seat number is returnd from Passenger() instance
    test("Should give passenger's seat number", () => {
        expect(pass.seatNumber).toBe(43)
    })
    // Test if array is returned from .bags attribute
    test("Should return array of Bags", () => {
        expect(typeof pass.bags).toBe("object")
    })
})
// Testing Bag() method innside Passenger() instance
describe("Passenger int. with Bag class", () => {
    // Add bag to pass obj
    beforeAll( () => {
        pass.addBag(bag)
    })
    // Check that Bag() has been appended to Passenger().bags attribute
    test("Should give weight of passenger's first bag", () => {
        expect(pass.bags[0].weight).toBe(8)
    })
})
