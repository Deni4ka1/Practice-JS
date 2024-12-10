//function Declaration

function greet(name) {
    console.log('Hello -', name)
}

//function Expression

const greet2 = function (name) {
    console.log('2 Hello -', name)
}

greet('Denis')
greet2('Denis')

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

function generateRandomNumbers() {
    const intervalId = setInterval(() => {
        const randomNumber = Math.floor(Math.random() * 5) + 1;
        console.log(randomNumber);
        if (randomNumber === 5) {
            clearInterval(intervalId);
        }
    }, 1000);
}

generateRandomNumbers();