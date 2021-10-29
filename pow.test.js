describe('POW BANG BOOM', () => {

    test('pow correctly raises a base to the exponent power', () => {
        const expected = 4;
        const actual = pow(2, 2);
        expect(actual).toEqual(expected);
    })
});