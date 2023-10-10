// wow --> #wow
// Hello World --> #HelloWorld
function generateHashtag(str) {
    let hastag = '#';
    if (str == '') {
        return hastag;
    } else {
        let pisah = str.split(' ');
        let sambung = '';
        for (const el of pisah) {
            sambung += el
        }
        let hasil = hastag.concat(sambung);
        return hasil;
    }
}

console.log(generateHashtag('Hello World'))


// 7, Hello --> HelloHelloHelloHelloHelloHelloHello
function repeatStr(n, s) {
    let space = '';
    for (let i = 0; i < n; i++) {
        space += s;
    }
    return space;
}

console.log(repeatStr(7, 'Hello'));


// value1 +-*/ value2
function basicOp(operation, value1, value2) {
    if (operation == '+') {
        return value1 + value2;
    } else if (operation == '-') {
        return value1 - value2;
    } else if (operation == '*') {
        return value1 * value2;
    } else if (operation == '/') {
        return value1 / value2;
    } else {
        return 'cannot operation';
    }
}

console.log(basicOp('-', 23, 12));


// character --> haracter (hapus huruf depan dan belakang)
function removeChar(str) {
    let splitStr = str.split('');
    splitStr.shift();
    splitStr.pop();

    let newStr = '';

    splitStr.forEach(el => {
        newStr += el;
    });

    return newStr;
};

console.log(removeChar('characters'));


// 5 --> [5, 4, 3, 2, 1];
const reverseSeq = n => {
    let newAr = [];
    for (let i = 1; i <= n; i++) {
        newAr.push(i);
    }
    newAr.reverse();
    return newAr;
};

console.log(reverseSeq(5));


// "I love arrays they are my favorite" --> [ 'I', 'love', 'arrays', 'they', 'are', 'my', 'favorite' ]
function stringToArray(string) {
    let convertToArray = string.split(' ');
    return convertToArray;
}

console.log(stringToArray("I love arrays they are my favorite"));

// n * m
// n atau m < 0 --> 0
function paperwork(n, m) {
    let result = 0;

    if (n < 0 || m < 0) {
        result = 0;
    } else {
        result = n * m;
    }

    return result;
}

console.log(paperwork(5, 5));


// num = 8 --> 1+2+3+4+5+6+7+8
var summation = function (num) {
    let result = 0;
    for (let i = 1; i <= num; i++) {
        result += i;
    }
    return result;
}

console.log(summation(8));


// ["a", "b", "c"] --> [ '1: a', '2: b', '3: c' ]
var number = function (array) {
    let newAr = [];
    let count = 1;

    for (let i = 0; i < array.length; i++) {
        newAr.push(`${count++}: ${array[i]}`);
    }

    return newAr;
}

console.log(number(["a", "b", "c"]));


// [2, 2, 2] --> 2^2 + 2^2 + 2^2
function squareSum(numbers) {
    let result = 0;

    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i] ** 2;
    }

    return result;
}

console.log(squareSum([2, 2, 2]));


