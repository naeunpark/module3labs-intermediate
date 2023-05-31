/*
5. Decimal number operations in JavaScript can lead to unexpected results, as in the
following:

We can sometimes avoid this using the toFixed function to force the number of decimal
places as below, but it’s not always useful:
a) Explain why the above code returns the wrong answer
    A: computer calculation system is based on binary number system. 
        so for the floating number, when it is calcualted, it turns into binary number and it gives different value from the given float number.
        thant's why it shows the wrong answer.
b) Create a function currencyAddition(float1, float2) which safely adds the two
decimal numbers float1 and float2 and returns the correct float result.
c) Create a function currencyOperation(float1, float2, operation) which
safely performs the given operation (either +, -, / or *) on the two numbers and returns

the correct float result. https://developer.mozilla.org/en-
US/docs/Web/JavaScript/Reference/Statements/switch may be useful.

d) (Extension) Extend the above function to include a fourth argument numDecimals
which allows the operation to support different amounts of decimal places from 1 to 10.
HINT: Assume 2 decimal places for b) and c) and use a multiplication factor. Test with
different values as well as the below:
*/

let twentyCents = 0.20
let tenCents = 0.10
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)
    // 0.2 + 0.1 = 0.30000000000000004

let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log(fixedTwenty + fixedTen)
    //why is this not working? 
    // A => toFixed returns STRING so it combines with two strings which are fixedTwenty & fixedTen

function makeInteger(num) {
    if (Number.isInteger(num)) {
        return num;
    } else {
        let divideByDot = num.toString().split('.');
        let numberLength = divideByDot[1].length;
        let baseNum = '1';
        for (i = 0; i < numberLength; i++) {
            baseNum += '0';
        }
        let number = {
            integer: parseInt(divideByDot[1], 10),
            baseNumber: parseInt(baseNum, 10)
        }
        return number;
    }

}

function currencyAddition(float1, float2) {
    let float1Int = makeInteger(float1);
    let float2Int = makeInteger(float2);
    let baseDevide = float1Int.baseNumber >= float2Int.baseNumber ? float1Int.baseNumber : float2Int.baseNumber;

    return (float1Int.integer + float2Int.integer) / baseDevide;
}

function currencyOperation(float1, float2, operation) {
    let float1Int = makeInteger(float1);
    let float2Int = makeInteger(float2);
    let baseDevide = float1Int.baseNumber >= float2Int.baseNumber ? float1Int.baseNumber : float2Int.baseNumber;

    let value = 0;
    switch (operation) {
        case '+':
            value = float1Int.integer + float2Int.integer;
            break;
        case '-':
            value = float1Int.integer - float2Int.integer;
            break;
        case '*':
            value = float1Int.integer * float2Int.integer;
            break;
        case '/':
            value = float1Int.integer / float2Int.integer;
            break;
    }
    return value / baseDevide;
}

console.log(0.3 == currencyAddition(0.1, 0.2)) // true
console.log(0.3 == currencyOperation(0.1, 0.2, '+')) // true