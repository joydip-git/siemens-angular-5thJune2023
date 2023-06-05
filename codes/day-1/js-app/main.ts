/*
function filter(arr, logicFn) {
    var result = []
    for (var i = 0; i < arr.length; i++) {
        var num = arr[i]
        var status = logicFn(num)
        if (status) {
            result.push(num)
        }
    }
    return result
}

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
function isEven(num) {
    return num % 2 === 0
}
var resultant = filter(numbers, isEven)
for (var j = 0; j < resultant.length; j++) {
    console.log(resultant[j])
}

//odd
function isOdd(num) {
    return num % 2 !== 0
}
var oddNumbers = filter(numbers, isOdd)
for (var j = 0; j < oddNumbers.length; j++) {
    console.log(oddNumbers[j])
}
*/

var numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
numbers
    .filter((num: number) => num % 2 === 0)
    .forEach((num: number) => console.log(num))
/*
numbers
    .filter(
        function (num) {
            return num % 2 === 0
        }
    )
    .forEach(
        function (num) {
            console.log(num)
        }
    )
    */
/*
function isEven(num) {
    return num % 2 === 0
}
var evenNumbers = numbers.filter(isEven)
function printValue(num) {
    console.log(num)
}
evenNumbers.forEach(printValue)
*/

//function declaration
function addFn(a: number, b: number) {
    return a + b
}
addFn(11, 1)
//function expression
var add = function (a: number, b: number) {
    return a + b
}
// function expression written using arrow function syntax (2015-ES6)
var addFunction = (a: number, b: number) => a + b
var printVal = (a: number) => console.log(a)
