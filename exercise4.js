/*
4. Write a function camelCase(cssProp) that changes dash-separated CSS properties like
'margin-left' into camel-cased 'marginLeft'.
The function should remove all dashes, and uppercase the first letter of each word after a
dash.
b) Create variants of the camelCase function that use different types of for loops, and
c) with and without the conditional operator.
*/

function camelCase(text) {
    let words = text.split('-');
    let camelCased = '';

    words.forEach((word, index) => {
        if (index > 0) {
            let capitalized = word.charAt(0).toUpperCase();
            let remainingLetters = word.slice(1);
            camelCased += capitalized + remainingLetters;
        } else {
            camelCased += word;
        }
    });
    return camelCased;
}

function variantsCamelCase1(text) {
    let words = text.split('-');
    let camelCased = '';

    for (let word of words) {
        let capitalized = word.charAt(0).toUpperCase();
        let remainingLetters = word.slice(1);
        camelCased += capitalized + remainingLetters;
    }
    let firstLetter = camelCased.charAt(0).toLowerCase();
    let remainingLettersOfcamelCased = camelCased.slice(1);

    return firstLetter + remainingLettersOfcamelCased;
}

function variantsCamelCase2(text) {
    let words = text.split('-');
    let camelCased = '';

    for (let index in words) {
        if (index > 0) {
            let capitalized = words[index].charAt(0).toUpperCase();
            let remainingLetters = words[index].slice(1);
            camelCased += capitalized + remainingLetters;
        } else {
            camelCased += words[index];
        }
    }
    return camelCased;
}

//console.log(camelCase('margin-left')) // marginLeft
//console.log(camelCase('background-image')) // backgroundImage
console.log(variantsCamelCase1('margin-left'))
console.log(variantsCamelCase2('background-image'))