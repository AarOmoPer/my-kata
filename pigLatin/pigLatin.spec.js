const {expect} = require("chai");

const pigLatin = require('./pigLatin')

describe('pigLatin', () => {
    it('works', () => {
    })
    it("appends 'way' when the first letter is a vowel", () => {
        expect(pigLatin('apple')).to.equal('appleway')
        expect(pigLatin('egg')).to.equal('eggway')
        expect(pigLatin('ian')).to.equal('ianway')
        expect(pigLatin('open')).to.equal('openway')
        expect(pigLatin('uniform')).to.equal('uniformway')
    })
    it("removes SINGLE leading consonant and appends it to the end with 'ay'", () => {
        expect(pigLatin('bat')).to.equal('atbay')
        expect(pigLatin('computer')).to.equal('omputercay')
        expect(pigLatin('dancer')).to.equal('ancerday')
        
    })
    it("removes CONSECUTIVE leading consonant and appends it to the end with 'ay'", () => {
        expect(pigLatin('shoe')).to.equal('oeshay')        
        expect(pigLatin('clip')).to.equal('ipclay')        
        expect(pigLatin('blender')).to.equal('enderblay')        
    })
})