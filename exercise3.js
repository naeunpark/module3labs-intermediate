/*
3. Use the following animals array for the below tasks. 
Test each one by printing the result to the console. 
Review the following link for tips:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

a) Add 2 new values to the end
b) Add 2 new values to the beginning
c) Sort the values alphabetically
d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the
middle of the animals array with newValue
e) Write a function findMatchingAnimals(beginsWith) that returns a new array
containing all the animals that begin with the beginsWith string. Try to make it work
regardless of upper/lower case.
*/

const animals = ['Tiger', 'Giraffe']
console.log(animals);

animals.push('Rabbit', 'Dolphin')
console.log(animals);

animals.unshift('Cow', 'Dog')
console.log(animals);

animals.sort();
console.log(animals);

function replaceMiddleAnimal(newValue) {
    let arrayLength = animals.length;
    let middleIndex = Math.round(arrayLength / 2);
    animals[middleIndex] = newValue;
    return animals;
}
console.log(replaceMiddleAnimal('Cat'));

function findMatchingAnimals(beginsWith) {
    let newArray = animals.filter(animal => animal.charAt(0) == beginsWith.toUpperCase() || animal.charAt(0) == beginsWith.toLowerCase());
    return newArray;
}
console.log(findMatchingAnimals('t'));