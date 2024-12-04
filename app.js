// // Theory
// const array = [1, 2, 3, 5, 20, 42, 69]
// // const arraystring = [1, null, 'a', 'i']
// // console.log(arraystring)
// // const array = new Array(1, 2, 5, 'gf')

// // console.log(array.length)

// console.log(array[1])
// console.log(array[array.length -1])
// array[0] = 'nine'
// console.log(array)


// console.log(inputElement.value)

// const notes = ['довчити масиви даних', 'піти погуляти', 'в неділю на 10:00 в парку "перемога"']

// function render() {

//     // // for (let i = 0; i < notes.length; i++) {
//     // //     listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i]))
//     // // }

//     // for (let note of notes) {
//     //     listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note))
//     // }

//     // listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[0]))
//     // listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[1]))
// }

// render()

// createBtn.onclick = function () {

//     if (inputElement.value.length === 0) {
//         return
//     }

//     listElement.insertAdjacentHTML(
//         'beforeend',
//         getNoteTemplate(inputElement.value)
//     )

//     inputElement.value = ''
// }

// function getNoteTemplate(title) {
//     return `
//     <li class="list__group-item">
//         <span>${title}</span>
//         <div class="group__item-btn">
//             <div class="btn__small btn__saccass">&check;</div>
//             <div class="btn__small btn__danger">&times;</div>
//         </div>
//     </li>
//     `
// }


// Object

// const person = {
//     firstName: 'Daniil',
//     lastName: 'Belobrov',
//     year: 2002,
//     hasGirlfliend: false,
//     language: ['ua', 'ru', 'us'],
//     getFullName: function() {}
// }

// console.log(person.year)
// const key = 'hasGirlfiend'

const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')


const notes = [
    {
        title: 'довчити масиви даних',
        completed: false
    },
    {
        title: 'піти погуляти',
        completed: false
    },
    {
        title: 'в неділю на 10:00 в парку "перемога"',
        completed: true
    }
]

function render() {
    listElement.innerHTML = ''

    for (let i = 0; i < notes.length; i++) {
        listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i], i))
    }

    // for (let note of notes) {
    //     listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note))
    // }
}
render()

createBtn.onclick = function () {

    if (inputElement.value.length === 0) {
        return
    }
    const newNote = {
        title: inputElement.value,
        completed: false,
    }
    notes.push(newNote)
    render()
    inputElement.value = ''
}

listElement.onclick = function (event) {
    if (event.target.dataset.index) {
        const index = parseInt(event.target.dataset.index)
        const type = event.target.dataset.type

        if (type === 'toggle') {
            notes[index].completed = !notes[index].completed
        } else if (type === 'remove') {
            notes.splice(index, 1)
        }
        render()
    }
}

function getNoteTemplate(note, index) {
    return `
        <li class="list__group-item">
            <span class="${note.completed ? 'text-decoration-line-through' : ''}">${note.title}</span>
            <div class="group__item-btn">
                <div class="btn__small btn__${note.completed ? 'warning' : 'success'}" data-index="${index}" data-type="toggle">&check;</div>
                <div class="btn__small btn__danger" data-type="remove" data-index="${index}">&times;</div>
            </div>
        </li>
    `;
}