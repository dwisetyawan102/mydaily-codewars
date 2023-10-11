// Day 1
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


// Day 2
// diagonal1 = 1 + 5 + 9 = 15
// diagonal2 = 3 + 5 + 9 = 17
// selisih antara diagonal1 dengan diagonal2 = 15 - 17 = 2
let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9]
]

function diagonalDifference(arr) {
    let count1 = 0;
    let count2 = 0;

    for (let i = 0; i < arr.length; i++) {
        count1 += arr[i][i];
        count2 += arr[i][arr.length - 1 - i];
    }

    let result = count1 - count2;
    return Math.abs(result);
}

console.log(diagonalDifference(arr));


// 1000000001 + 1000000002 + 1000000003 + 1000000004 + 1000000005 = 5000000015
let veryAr = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];

function aVeryBigSum(veryAr) {
    let sum = 0;

    for (let i = 0; i < veryAr.length; i++) {
        sum += veryAr[i];
    }

    return sum;
}

console.log(aVeryBigSum(veryAr));


// indeks ke [i] a lawan indeks ke [i] b = point 1
// 5 lawan 3 = a menang = a 1
// 6 lawan 6 = draw = a dan b 0
// 7 lawan 10 = b menang = b 1
// point dimasukan ke array baru = [ 1, 1]
let a = [5, 6, 7];
let b = [3, 6, 10];

function compareTriplets(a, b) {
    let resultA = 0;
    let resultB = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            resultA += 1;
        } else if (a[i] < b[i]) {
            resultB += 1;
        } else {
            resultA += 0;
            resultB += 0;
        }
    }

    let newAr = [];
    newAr.push(resultA, resultB);
    return newAr;
}

console.log(compareTriplets(a, b));


// indeks ke-0 + ke-1 + ke-2 dst
// 1 + 2 + 3
function simpleArraySum(ar) {
    let result = 0;

    for (let i = 0; i < ar.length; i++) {
        result += ar[i];
    }

    return result;
}

console.log(simpleArraySum([1, 2, 3]));


// membandingkan hasil penjumlahan dari masing masing elemen array
// n1 = 7 + 7 = 14
// n2 = 5 + 8 = 13
// jika n1 > n2 = return -1
// jika n1 < n2 = return 1
// jika draw = return 0
function comparePowers(n1, n2) {
    let newN1 = 0;
    for (let i = 0; i < n1.length; i++) {
        newN1 += n1[i];
    }

    let newN2 = 0;
    for (let i = 0; i < n1.length; i++) {
        newN2 += n2[i];
    }

    if (newN1 > newN2) {
        return -1;
    } else if (newN1 < newN2) {
        return 1;
    } else {
        return 0;
    }
}

console.log(comparePowers([7, 7], [5, 8]));


// a_list = ['45', '30', '50', '1'] --> 1304550
let a_list = ['45', '30', '50', '1'];

function penalty(a_list) {
    let orderToSmall = a_list.sort((a, b) => a - b);
    let newStr = '';
    for (let i = 0; i < orderToSmall.length; i++) {
        newStr += orderToSmall[i];
    }
    return newStr;
    // let newArr = [];
    // newArr.push(newStr);
    // return newArr;
}

console.log(penalty(a_list));


let n1 = [2, 10];
let n2 = [2, 15];


// array = [0, -1, -4] --> 0 + -1 + -4 = -5 --> ganjil 
let array = [0, -1, -4];

function oddOrEven(array) {
    let sumInput = 0;
    for (let i = 0; i < array.length; i++) {
        sumInput += array[i];
    }
    console.log(sumInput);
    if (sumInput % 2 == 0) {
        return 'genap'
    } else {
        return 'ganjil';
    }
}

console.log(oddOrEven(array));


// 192 --> 1 + 9 + 2 = 15;
function digitalRoot(n) {
    let convertNum = n.toString();
    let convertToArray = convertNum.split('');
    let result = 0;
    for (let i = 0; i < convertToArray.length; i++) {
        result += parseInt(convertToArray[i]);
    }
    return result;
}

console.log(digitalRoot(942));
