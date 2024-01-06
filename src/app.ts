/**
 * Generic types: a type thatis kind of connected with some other type and is very flexible
 * for example: Array<String>
 */


// const names = ['kiki', 'koko']

// const promise: Promise<string> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve ('This is done');
//     }, 2000),
// });

// promise.then(data => {
//     data.split(' ')
// })


//T and U is essential saying theres gonna be a that is type Object blah and b that is type Object blah blah
//good in situation when we have a vague variable and better readability

function merge<T, U>(a: T, b: U) {
    return Object.assign(a,b);
}

// the T would represent something like this example
// const mergedObj = merge({name: 'Max'}, {age: 30}) as {name: string, age: number}

const mergedObj = merge({name: 'Matt', hobbies: ['Sports']}, 30)
console.log(mergedObj.age)


//constraints: have a limit on what you would want on your generic types
function mergeConstraint<T extends object, U extends object>(a: T, b: U) {
    return Object.assign(a,b);
}

const mergedConstraintObj = merge({name: 'Matt', hobbies: ['Sports']}, 30)
console.log(mergedConstraintObj)