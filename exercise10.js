/*
10.The following code uses the Date object to print the current time and the number of hours
that have passed today so far. Extend the code to do the following:

a) Print the total number of minutes that have passed so far today
b) Print the total number of seconds that have passed so far today
c) Calculate and print your age as: 'I am x years, y months and z days old'
d) Write a function daysInBetween(date1, date2) which calculates and returns the amount
of days in between the two given dates.
*/

const today = new Date();

console.log('Current time is ' + today.toLocaleTimeString())
console.log(today.getHours() + ' hours have passed so far today')

console.log(`${today.getMinutes()} minutes have passed so far today`);
console.log(`${today.getSeconds()} seconds have passed so far today`);

function getAge(date) {
    let bday = new Date(date).getTime();
    let currentYear = today.getTime();
    let ageDifference = new Date(currentYear - bday);

    return `I am ${ageDifference.getFullYear() - 1970} years, ${ageDifference.getMonth()} months and ${ageDifference.getDate()} days old`;
}
console.log(getAge('1993-04-10'));

function daysInBetween(date1, date2) {
    let oneDay = 1000 * 60 * 60 * 24;
    let d1 = new Date(date1).getTime();
    let d2 = new Date(date2).getTime();
    let dateDifference = Math.abs((d1 - d2) / oneDay);
    return dateDifference;
}
console.log(daysInBetween('2023-4-11', '2022-4-10'));