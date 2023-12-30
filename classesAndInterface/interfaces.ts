//can be use as type
//type AddFn = (a: number, b: number) => number
//interfaces are pure TS, theres no such thing of it in Javascript
interface AddFn {
    (a: number, b: number): number
}

let add: AddFn 

add = (n1: number, n2: number) => {
    return n1 + n2
}

interface Named { // cant add private or public but can use readonly;
    readonly name: string;
    // ? makes the field optional
    outputName?: string
}

//can extend multiple interfaces, classes cant
interface Greetable extends Named {
    greet(phrase: string): void;
}

//must have variables and methods like Greetable and can have more, like abstract classes but no implementation details
class Person implements Greetable {
    name: string;
    age = '2'
    constructor(n: string){
        this.name = n
    }
    greet(phrase: string) {
        console.log(phrase + ' ' + this.name)
    }

}

let user1: Greetable;

//interface - contract for that object, used when we want to make sure certain objects have certain variables and methods
user1 = new Person('Amy')

user1.greet('Hi yalls, its')
console.log(user1)