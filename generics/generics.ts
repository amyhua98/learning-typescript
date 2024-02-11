/**
 * Generic types: a type thatis kind of connected with some other type and is very flexible
 * FLEXIBLE AND TYPE SAFETY
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

// function merge<T, U>(a: T, b: U) {
//     return Object.assign(a,b);
// }

// // the T would represent something like this example
// // const mergedObj = merge({name: 'Max'}, {age: 30}) as {name: string, age: number}

// const mergedObj = merge({name: 'Matt', hobbies: ['Sports']}, 30)
// console.log(mergedObj.age)


// //constraints: have a limit on what you would want on your generic types, on this example it guarantees that an object is coming back
// function mergeConstraint<T extends object, U extends object>(a: T, b: U) {
//     return Object.assign(a,b);
// }

// const mergedConstraintObj = merge({name: 'Matt', hobbies: ['Sports']}, 30)
// console.log(mergedConstraintObj)

interface Lengthy {
    length: number;
}

// generic T lets it be whatever element it is but extends to Lengthy so has a length property
// for example. string, array will work, number and boolean wont
function countAndPrint<T extends Lengthy>(element: T) : [T, String] {
    let descriptionText = 'Got no value';
    if (element.length === 1){
        descriptionText = 'Got 1 element.'
    }else if (element.length > 1){
        descriptionText = 'Got ' + element.length + ' elements.'
    }
    return [element,descriptionText ]
}

console.log(countAndPrint('Hi there!'))

// extends obj - guaratees that there will be a key
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return 'Value: ' + obj[key];
}

console.log({}, 'name')

//generic class - for when we have alarge range of objects to reuse the class, super flexible and have type support
class DataStorage<T> {
    private data: T[] = [];

    addItem(item: T){
        this.data.push(item)
    }

    removeItem(item: T){
        this.data.splice(this.data.indexOf(item) , 1)
    }

    getItems(){
        return [...this.data]
    }
}

const textStorage = new DataStorage<String>();
textStorage.addItem('Manny');
textStorage.addItem('Manu');
textStorage.removeItem('Manny');
console.log(textStorage.getItems)

const numStorage = new DataStorage<number>();

// doesnt work with object because these are references, the removeItem will not work 
// const objStorage = new DataStorage<object>();
// objStorage.addItem({name: 'Manny'});
// objStorage.addItem({name: 'Manu'});
// objStorage.removeItem({name: 'Manny'});

// console.log(objStorage.getItems)


interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

//Partial - says that the end object will be a CourseGoal, but makes all properties are optionals
function createCourseGoal(title: string, description: string, date: Date) : CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal;
}

//Readonly - cant make any changes to the string [] 
// so you would not be able to push a new word or pop out a word in the array (only in TS words)
const names: Readonly<string[]> = ['Max', 'Martin']
// names.push('Manu')
//names.pop()



