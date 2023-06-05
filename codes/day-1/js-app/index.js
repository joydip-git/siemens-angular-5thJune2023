var numInt = 10
var numFloat = 10.32
var name = "joydip"
var isOkay = true

// console.log(typeof numInt)
// console.log(typeof numFloat)
// console.log(typeof name)
// console.log(typeof isOkay)

//object: Object literal syntax
var anilObj = {
    //value properties
    name: 'Anil',
    id: 1,
    salary: 1000,
    //functional properties
    print: function () {
        return this.name + ' ' + this.id + ' ' + this.salary
    }
}
//console.log(typeof anilObj)

anilObj.location = 'Bangalore'
anilObj['sayHi'] = function () {
    console.log('Hi to ' + this.name)
}
//console.log(anilObj)
console.log(anilObj.name)
console.log(anilObj['salary'])
console.log(anilObj.print())
anilObj['sayHi']()
console.log(anilObj.location)

var numbers = [1, 2, 3, 4]
numbers.push(10, 20, 30)
numbers.splice(1, 2, 200, 300)
console.log(numbers)
//var numbers = new Array(1, 2, 3, 4)
//console.log(typeof numbers)
//console.log(numbers[1])
/**
 * {
 *  0:1,
 *  1:2,
 *  2:3,
 *  3:4
 * }
 */