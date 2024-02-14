/**
 * Decorators - Kotlin uses the term "annotations" for similar functionality. 
 * Annotations provide metadata about the program to the compiler or runtime environment. 
 * They are used to add information or behavior to classes, functions, or properties.
 */

/**
 * 
 * A decorator factory is a function that generates decorators dynamically. 
 * Instead of returning a single decorator, it returns a new decorator each time it is called, 
 * possibly with different behavior based on the arguments passed to the factory function.
 */

function Logger(logString: string){
    return function(constructor: Function){
        console.log(logString);
        console.log(constructor);
    }
}


//@Logger - TS takes it as a decorator, decorators are marked with @, there are builtin ones and you can create custom ones
@Logger('LOGGING - PERSON')
class Person {
    name = 'Max';

    constructor(){
        console.log('Creating person object...');
    }
}

const pers = new Person();
console.log(pers)