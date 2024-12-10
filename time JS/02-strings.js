const firstName = 'Denys'
const age = '21'

function getAge() {
    return age
}

// const output = `Hello my name is ${name} and
// my age is ${age} ${getAge() > 18 ? 'Can drive' : 'Can\'t drive'}`

// console.log(output)

console.log(firstName.length)
console.log(firstName)
console.log(firstName.toUpperCase())
console.log(firstName.toLowerCase())
console.log(firstName.charAt(2))
console.log(firstName.indexOf('n'))
console.log(firstName.toLocaleLowerCase().startsWith('den'))
console.log(firstName.endsWith('is'))
console.log(firstName.repeat(5))

const password = '   my supper pass'
console.log(password.trim())
