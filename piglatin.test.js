const translateToPigLatin = require('./piglatin');

// Write a test to make sure if we get a blank string in, we give a blank string back

describe('Testing translating TO pig-latin...', () => {
    
    test('If empty string goes in, empty string comes out', () => {
        expect( translateToPigLatin('')).toBe('');
    })

    test('starting consonant moves to end with \'ay\'...', () => {
        expect( translateToPigLatin('pig')).toBe('igpay');
    })

    test('starting vowel sound stays and \'ay\' to the end...', () => {
        expect( translateToPigLatin('eat')).toBe('eatay')
    })
})