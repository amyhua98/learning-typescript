type Admin = {
    name: string;
    privileges: string []
};

type Employee = {
    name: string
    startDate: Date
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Adam',
    privileges: ['create-server'],
    startDate: new Date()
};

// const e2: UnknownEmployee = {
//     name: 'Bob',
//     startDate: new Date()
// };

//intersection types can have multiple structures
type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function addU(a: Combinable, b: Combinable) {
    //type guard: typeof
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

const fetchedUserData = {
    id: '1234',
    name: 'Hallie',
    job: { title: 'CEO', description: 'Owns company'}
}

//optional chaining: ? asks if that variables exists, helps access safely nested variables - avoids errors and either return or doesnt return
console.log(fetchedUserData?.job.title)


//nullish coalescing: if null the ?? will return the latter
const userInput = null;
const storedData = userInput ?? 'DEFAULT';

// type UnknownEmployee = Employee | Admin;

// function printEmployeeInfo(emp: UnknownEmployee){
//     console.log('Name: ' + emp.name);
//     if ('privileges' in emp){
//         console.log('Privileges: ' + emp.privileges);
//     }
//     if ('startDate' in emp){
//         console.log('Privileges: ' + emp.startDate);
//     }
// }

// printEmployeeInfo(e1);

// printEmployeeInfo(e2);

// class Car {
//     drive() {
//         console.log('Driving...')
//     }
// }

// class Truck {
//     drive() {
//         console.log('Driving a truck...')
//     }
//     loadCargo(amount: number) {
//         console.log('Loading cargo...' + amount)
//     }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle){
//     vehicle.drive();
//     //check the object, Javascript function not just Typescript
//     if (vehicle instanceof Truck){
//         vehicle.loadCargo(1000)
//     }
// }

// useVehicle(v1);
// useVehicle(v2);

// interface Bird {
//     type: 'bird';
//     flyingspeed: number;

// }

// interface Horse {
//     type: 'horse';
//     runningspeed: number;
// }

// type Animal = Bird | Horse;

// //another way to get around union types
// function moveAnimal(animal: Animal){
//     let speed;
//     switch(animal.type){
//         case 'bird':
//             speed = animal.flyingspeed;
//             break;
//         case 'horse':
//             speed = animal.runningspeed;
//             break;
//     }
//     console.log('Moving with speed: ' + speed);
// }
// moveAnimal({type:'bird', flyingspeed: 10 })
// /**
//  * two types of type casting:
//  * 1. Assign it from the start (ex.118)
//  * 2. Assign afterwards examples (ex.119) - usually see this version
//  */

// // const userInputElement = <HTMLInputElement>document.getElementById('user-input');
// const userInputElement = <HTMLInputElement>document.getElementById('user-input') as HTMLInputElement;

// userInputElement.value = "Hi!";

// interface ErrorContainer{
//     [prop: string] : string;
// }

// const errorBag: ErrorContainer = {
//     email: 'Not a valid email'
// }