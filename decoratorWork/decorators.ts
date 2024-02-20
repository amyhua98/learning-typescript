// /**
//  * Decorators - Kotlin uses the term "annotations" for similar functionality. 
//  * Annotations provide metadata about the program to the compiler or runtime environment. 
//  * They are used to add information or behavior to classes, functions, or properties.
//  */

// /**
//  * 
//  * A decorator factory is a function that generates decorators dynamically. 
//  * Instead of returning a single decorator, it returns a new decorator each time it is called, 
//  * possibly with different behavior based on the arguments passed to the factory function.

//  * this version might have different settings in tsconfig.json
//  */

// function Logger(logString: string){
//     console.log('CONSOLE LOGGER');
//     return function(constructor: Function){
//         console.log(logString);
//         console.log(constructor);
//     }
// }
// // the Wtih template is the factory, the function statement inside the WithTemplate is the actual decorator
// function WithTemplate(template: string, hookId: string) {
//     console.log('TEMPLATE LOGGER');
//     //new(...args: any[]) : {} - get in some object of any type that is new 
//     return function<T extends {new(...args: any[]) : {name: string}}>( originalConstructor: T) {
//         //syntatic sugar - syntax or language construct that doesn't introduce new functionality but makes the code more convenient or expressive
//         // returns a new constructor function replaces orginial class and constructor
//         // the _ means we dont really care about it
//         return class extends originalConstructor {
//             constructor(..._: any[]){
//                 super();
//                 console.log('Render template')
//                 const hookEl = document.getElementById(hookId);
//                 if (hookEl){
//                     hookEl.innerHTML = template;
//                     hookEl.querySelector('h1')!.textContent = this.name
//                 }
//             }
//         };
//     }
// }

// //@Logger - TS takes it as a decorator, decorators are marked with @, there are builtin ones and you can create custom ones
// // @Logger('LOGGING - PERSON')

// //Can have multiple decorators to a class, goes in a bottom up order
// @Logger('LOGGING')
// @WithTemplate('<h1>My Person Object<h1>', 'app')
// class Person {
//     name = 'Max';

//     constructor(){
//         console.log('Creating person object...');
//     }
// }

// const pers = new Person();
// console.log(pers)


// // --

// // Shows in browser console even it not ititalize, Javascript reads it once it compiles, gives a prototype of the property
// function Log(target:any, propertyName: string | Symbol ){
//     console.log('Property Decorator!');
//     console.log(target, propertyName);
// }

// function Log2(target: any, name: string, descriptor: PropertyDescriptor){
//     console.log('Access Decorator!');
//     console.log(target);
//     console.log(name);
//     console.log(descriptor);
// }

// function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor){
//     console.log('Method Decorator!');
//     console.log(target);
//     console.log(name);
//     console.log(descriptor);
// }

// function Log4(target: any, name: string | Symbol, position: number){
//     console.log('Parameter Decorator!');
//     console.log(target);
//     console.log(name);
//     console.log(position);
// }

// class Product {
//     // Decorators can work on properties
//     @Log
//     title:  string;
//     private _price: number;

//     @Log2
//     set price(val: number) {
//         if (val > 0){
//             this._price = val;
//         } throw new Error('Invalid price - should be positive!');
//     }

//     constructor(t: string, p: number){
//         this.title = t;
//         this._price = p;
//     }
//     //Method decorator as Log3 and Parameter decorator as Log4
//     @Log3
//     getPriceWithTax(@Log4 tax: number){
//         return this._price * (1 + tax);
//     }

//     /**
//      * All decorators when classes are defined
//      */
// }

// const p1 = new Product('Book', 29);
// const p2 = new Product('Book 2', 29);

// //-- "Autobind" Decorator
// function AutoBind(_: any, _2: string, descriptor: PropertyDescriptor){
//     const originalConstructor = descriptor.value;
//     const adjDescriptor: PropertyDescriptor = {
//         configurable: true,
//         enumerable: false,
//         get(){
//             const boundFn = originalConstructor.bind(this);
//             return boundFn;
//         }
//     }
//     return adjDescriptor;
// }

// class Printer {
//     message = 'This works';

//     @AutoBind
//     showMessage(){
//         console.log(this.message);
//     }
// }

// const p = new Printer();

// // as of now, it is listening to addEventListener and not connecting the p.showMessage to the p that is the newPrinter has to use .bind() to connect them
// // const button = document.querySelector('button')!;
// // button.addEventListener('click', p.showMessage.bind(p));

// // instead can use decorator to bind the p
// const button = document.querySelector('button')!;
// button.addEventListener('click', p.showMessage);


// // -- Validation with Decorator


// interface ValidatorConfig {
//   [property: string]: {
//     [validatableProp: string]: string[]; // e.g. ['required', 'positive']
//   };
// }

// const registeredValidators: ValidatorConfig = {};

// function Required(target: any, propName: string) {
//   registeredValidators[target.constructor.name] = {
//     ...registeredValidators[target.constructor.name],
//     [propName]: ['required'],
//   };
// }

// function PositiveNumber(target: any, propName: string) {
//   registeredValidators[target.constructor.name] = {
//     ...registeredValidators[target.constructor.name],
//     [propName]: ['positive'],
//   };
// }
// function validate(obj: any) {
//   const objValidatorConfig = registeredValidators[obj.constructor.name];
//   if (!objValidatorConfig) {
//     return true;
//   }

//   let isValid = true;
//   for (const prop in objValidatorConfig) {
//     for (const validator of objValidatorConfig[prop]) {
//       switch (validator) {
//         case 'required':
//           isValid = isValid && !!obj[prop];
//           break;
//         case 'positive':
//           isValid = isValid && obj[prop] > 0;
//           break;
//       }
//     }
//   }
//   return isValid;
// }

// class Course {
//   @Required
//   title: string;
//   @PositiveNumber
//   price: number;

//   constructor(t: string, p: number) {
//     this.title = t;
//     this.price = p;
//   }
// }

// const courseForm = document.querySelector('form')!;

// courseForm.addEventListener('submit', (event) => {
//   event.preventDefault();
//   const titleEl = document.getElementById('title') as HTMLInputElement;
//   const priceEl = document.getElementById('price') as HTMLInputElement;

//   const title = titleEl.value;
//   const price = +priceEl.value;

//   const createdCourse = new Course(title, price);
//   if (!validate(createdCourse)) {
//     alert('Invalid input, please try again!');
//     return;
//   }
//   console.log(createdCourse);
// });
