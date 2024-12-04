// let num = 42
// let firstName = 'Deni4ka'
// const isProgrammer = true

/* Can Do
let $ = 'test' 
let $num = 42
let _ = 49
let first_name = 'Elena' // bad
let myCumpf = true  // good
*/

/* restricted
let my-cumpf 
/ firstName = 'Max'
/ isProgrammer = folse error becouse of const
*/


/* alert(firstName)
console.log(num + 10)
console.log(num - 10)
console.log(num * 10)
console.log(num / 10)
console.log(num)
*/


// let num2 = num + 10
// console.log(num,num2)
// num = num2 - num
// num2 = num2 + 1
// console.log(num,num2)

// let num3 = num + (10 * 2) / 5 - 1
// console.log(num3)

// const fullName = firstName + ' Ata'
// console.log(fullName)

const resultElemet = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const multiplicationBtn = document.getElementById('multiplication')
const divisionBtn = document.getElementById('division')

let action = '+'


// console.log(resultElemet.textContent)
// resultElemet.textContent = (42 - 2)
// console.log(typeof sum)



plusBtn.onclick = function () {
    action = '+'
}

minusBtn.onclick = function () {
    action = '-'
}

multiplicationBtn.onclick = function () {
    action = '*'
}

divisionBtn.onclick = function () {
    action = '/'
}

function printResult(result) {
    if (result < 0) {
        resultElemet.style.color = 'red'
    } else {
        resultElemet.style.color = 'green'
    }
    resultElemet.textContent = result
}

function computeNumbersWithAction(inp1, inp2, actionSymbol) {
    const num1 = Number(inp1.value)
    const num2 = Number(inp2.value)
    if (actionSymbol == '+') {
        return num1 + num2
    }
    if (actionSymbol == '-') {
        return num1 - num2
    }
    if (actionSymbol == '*') {
        return num1 * num2
    }
    if (actionSymbol == '/') {
        return num1 / num2
    }
    // return actionSymbol == '+' ? num1 + num2 : num1 - num2
}


submitBtn.onclick = function () {
    const result = computeNumbersWithAction(input1, input2, action)
    printResult(result)

    // if (action == '+') {
    // const sum = Number(input1.value) + Number(input2.value)
    // printResult(sum)
    // } else if (action == '-') {
    // const sum = Number(input1.value) - Number(input2.value)
    // printResult(sum)
    // }
}


