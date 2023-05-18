/*
9. Given the below salaries object, perform the following tasks.

a) Write a function sumSalaries(salaries) that calculates and returns the total of all salaries
b) Write a function topEarner(salaries) that calculates and returns the name of the person
earning the highest salary
*/

let salaries = {
    "Timothy": 35000,
    "David": 25000,
    "Mary": 55000,
    "Christina": 75000,
    "James": 43000
};

function sumSalaries(object) {
    let sum = 0;
    for (let [key, value] of Object.entries(object)) {
        sum += value;
    }
    return sum;
}
console.log(sumSalaries(salaries));

function topEarner(object) {
    let top = Object.values(object).sort();
    let topSalary = top[top.length - 1];
    let getName;
    Object.entries(object).forEach((salary) => {
        if (salary[1] == topSalary) {
            getName = salary[0];
        };
    })
    return getName;
}
console.log(topEarner(salaries));