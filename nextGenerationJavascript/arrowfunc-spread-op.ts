const userName = 'Amy';
//cannot change

let age = 24
age = 25
//let is allows for certain scopes

//var is valid but not really used in Typescript, only for global and function scope

const add = (a: number, b: number) => {
    return a+b
}

const printOutput: (a: number | string) => void= output => console.log(output)

const button = document.querySelector('button')
if (button){
    button.addEventListener('click', event => {
        console.log(event)
    })
}

printOutput(add(5,6))

const hobbies = ['Hiking', 'Cooking']
const activeHobbies = ['Drawing']

activeHobbies.push(...hobbies)
//deep copies


// const add = (...numbers: number[]) => {
//     numbers.reduce((currResult, currValue) => {
//         return currResult + currValue
//     }, 0)
// }

// const addNumbers = add(8)
// console.log(addNumbers)

const [hobby1, hobby2] = hobbies
// for of deconstruction
console.log(hobby1)
console.log(hobby2)


