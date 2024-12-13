//function Declaration

function greet(name) {
    console.log('Hello -', name)
}

//function Expression

// const greet2 = function (name) {
//     console.log('2 Hello -', name)
// }

// greet('Denys')
// greet2('Denis')

// console.dir(greet)

// setTimeout(function () {
//     greet('Denys')
// }, 1500)

// let counter = 0
// const interval = setInterval(function () {
//     if (counter === 5) {
//         clearInterval(interval)
//     } else {
//         console.log(++counter)
//     }
// }, 1000)

// function generateRandomNumbers() {
//     const intervalId = setInterval(() => {
//         const randomNumber = Math.floor(Math.random() * 5) + 1;
//         console.log(randomNumber);
//         if (randomNumber === 5) {
//             clearInterval(intervalId);
//         }
//     }, 1000);
// }

// generateRandomNumbers();

//Arrow Functions

function greet(name) {
    console.log('Hello -', name)
}

const arrow = (name, age) => {
    console.log('Hello -', name)
}

arrow('Denys', 21)

const arrow2 = (name, age) => console.log('Hello - ', name)

arrow2('Denys')

function pow(num, exp) {
    return Math.pow(num, exp)
}

const pow2 = (num, exp) => Math.pow(num, exp)

console.log(pow2(2, 3))


// =========== Default Parameters

const sum = (a = 40, b = a / 2) => a + b

// console.log(sum(40, 2))
// console.log(sum(40))

function sumAll(...numbers) {
    // let res = 0
    // for (let num of numbers) {
    //     res += num
    // }
    // return res
    return numbers.reduce((acc, cur) => (acc += cur), 0)
}

console.log(sumAll(1, 2, 3, 4, 5))