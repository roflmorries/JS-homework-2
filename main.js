// 1.

let digit = 10369;

let firstDigit = (digit - (digit % 10000)) / 10000;

let secondDigit = ((digit % 10000) - (digit % 1000)) / 1000;

let thirdDigit = ((digit % 1000) - (digit % 100)) / 100;

let fourthDigit = ((digit % 100) - (digit % 10)) / 10;

let lastDigit = digit % 10

console.log(firstDigit, secondDigit, thirdDigit, fourthDigit, lastDigit);


// 2.
let defaultName = 'Bob';
let userName = prompt('Enter your name');
alert(`Hello, ${userName || defaultName}! How are you?`);


// 3.

let userValue = parseInt(prompt('Enter a three-digit number'));

if (!isNaN(userValue) && userValue >= 100 && userValue <= 999) {
    let firstDigitValue = Math.floor(userValue / 100);
    let secondDigitValue = Math.floor((userValue % 100) / 10);
    let thirdDigitValue = userValue % 10;

    if (firstDigitValue === secondDigitValue && secondDigitValue === thirdDigitValue) {
        console.log('All numbers are the same');
    } else if (firstDigitValue === secondDigitValue) {
        console.log('First and second numbers are the same');
    } else if (secondDigitValue === thirdDigitValue) {
        console.log('Second and third numbers are the same');
    } else if (firstDigitValue === thirdDigitValue) {
        console.log('First and third numbers are the same');
    } else {
        console.log('No numbers are the same');
    }
}
    else {
    alert('Please enter a three-digit number');
}


