const names = ['Денис', 'Кондріч', 'Дарина', 'Нігіна', 'Данік', 'Дзюба']

names.push('Шабанін')
names.unshift('Діма')
// names.shift()
// console.log('Names: ', names)

// const greatMan = 'Діма'
// const index = names.indexOf(greatMan)
// // console.log(index)
// const newName = names.with(index, 'Діма Маркован')
// // console.log(newName)

// const capitalNames = names.map(function(name){
//     return name.toUpperCase()
// })

// console.log(capitalNames) 

const people = [
    { name: 'Денис', budget: 30000 },
    { name: 'Дарина', budget: 35000 },
    { name: 'Кондріч', budget: 42000 },
    { name: 'Дима', budget: 20000 }
]

// let findedPerson

// for(let person of people) {
//     if (person.budget === 20000) {
//     findedPerson = person
//     }
// }


// const findedPerson = people.find(function (person) {
//     return person.budget === 20000
// if (person.budget === 20000) {
//     return true
// }
// })

// const finded = people.find((p) => p.budget === 35000)
// const finded = people.findIndex((p) => p.budget === 35000)

// console.log(finded)

// let sumBudget = 0
// const filtered = people.filter(function (p) {
//     return p.budget > 30000
// })
// console.log(filtered)
// filtered.forEach(function (p) {
//     sumBudget = sumBudget + p. budget
// })

const sumBudget = people
    .filter((p) => p.budget > 30000)
    .map((p) => p.budget)
    .reduce((acc, p) => acc + p, 0)

console.log(sumBudget)

// const string = 'Бу, злякався? не бійся!'
// const reversed = string.split('').toReversed().join('')

// console.log(reversed)