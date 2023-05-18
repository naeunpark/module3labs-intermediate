/*
8. The following code creates a new Map object for storing names beginning with A, B, or C
with their phone numbers.

a) Create a new phoneBookDEF Map to store names beginning with D, E or F
b) Initialise the contents of phoneBookDEF by passing in an array of keys/values
c) Update the phone number for Caroline
d) Write a function printPhoneBook(contacts) that prints the names and phone
numbers in the given Map
e) Combine the contents of the two individual Maps into a single phoneBook Map
f) Print out the full list of names in the combined phone book
*/

const phoneBookABC = new Map() //an empty map to begin with

phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')

const phoneBookDEF = new Map();

phoneBookDEF.set('Daniel', '0212588888');
phoneBookDEF.set('Ellie', '0219877777');
phoneBookDEF.set('Frankie', '024565555');

phoneBookABC.set('Caroline', '032456456')
console.log(phoneBookABC.get('Caroline'));

function printPhoneBook(contacts) {
    console.log(contacts.entries());
}

printPhoneBook(phoneBookABC);

const phoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);
console.log(phoneBook);