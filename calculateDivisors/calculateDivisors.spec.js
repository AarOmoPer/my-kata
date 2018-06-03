const {expect} = require('chai');

const calculateDivisors = require('./calculateDivisors')

describe('calculateDivisors', () => {
    it('works', () => {

    })

    it('returns a number', () => {
        expect(calculateDivisors(1)).to.be.a('number')
    })

    it('returns the right fizzBuzz sum', () => {
        expect(calculateDivisors(1)).to.equal(0)
        expect(calculateDivisors(5)).to.equal(3)
        expect(calculateDivisors(6)).to.equal(8)
        expect(calculateDivisors(10)).to.equal(23)
        expect(calculateDivisors(12)).to.equal(33)
    })
})