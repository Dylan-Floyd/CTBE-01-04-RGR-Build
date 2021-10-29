const pow = require('./pow.js');

describe('POW BANG BOOM', () => {

    test('pow correctly raises a base to the exponent power', () => {
        expect(pow(2, 2)).toEqual(4);
        expect(pow(4, 2)).toEqual(16);
        expect(pow(2, 4)).toEqual(16);
    });
});