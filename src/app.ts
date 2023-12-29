interface Greetable { // cant add private or public but can use readonly
    name: string;

    greet(phrase: string): void;
}

//must have variables and methods like Greetable and can have more, like abstract classes but no implementation details
class Person implements Greetable {
    name: string;

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