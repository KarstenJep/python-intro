// For words that begin with consonant sounds, 
// all letters before the initial vowel are placed at the end of the word sequence. 
// Then, "ay" is added, as in "pig" = "igpay"

// When words begin with consonant clusters (multiple consonants that form one sound), 
// the whole sound is added to the end when speaking or writing.
// "trash" = "ashtray"

// For words that begin with vowel sounds, the vowel is left alone, and most commonly 
// 'ay' is added to the end. 
// "eat" = "eatay"

// https://codeutopia.net/blog/2015/03/01/unit-testing-tdd-and-bdd/

const translateToPigLatin = ( string ) => {
    let result = string;
    if (string.length === 0){
        return result;
    }
    let firstCharacter = string[0];
    if ( isVowel(firstCharacter)) {
        result = string + 'ay';
        // Remove first character from result & add 1st character + 'ay' to the ende
    } else {
        // Remove first character from result & add 1st character + 'ay' to the ende
        result = string.substring(1, string.length) + firstCharacter + 'ay';
    }
    return result;
}

// TODO - should be in it's own module with its own unit test
const isVowel = (character) => {
    let lowerCase = character.toLowerCase();
    if (lowerCase === 'a' || lowerCase === 'e' || lowerCase === 'i' || lowerCase === 'o' || lowerCase === 'u' ){
        return true;
    }
    return false;
}

module.exports = translateToPigLatin;