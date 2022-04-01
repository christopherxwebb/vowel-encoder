const encode = require('./encoder')

describe('encode', () => {
    it('returns an encoded output', () => {
        expect(encode('hello')).toEqual('h2ll4');
    })
})