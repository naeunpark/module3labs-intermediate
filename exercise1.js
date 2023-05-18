/*
1. Create a function that takes a string as a parameter and returns the string with the first
character of each word changed into a capital letter, as in the example below. Test it with
different strings.
*/

const ucFirstLetters = (sentence) => {
    let words = sentence.split(' ');

    let capitalizedSentence = '';
    words.forEach(word => {
        let firstLetter = word.charAt(0).toUpperCase();
        let remainingLetters = word.slice(1)
        let capitalizedWord = firstLetter + remainingLetters;

        capitalizedSentence += ` ${capitalizedWord}`;
    });

    return capitalizedSentence;
}

console.log(ucFirstLetters("los angeles")); //Los Angeles
console.log(ucFirstLetters("institute of data in auckland"));