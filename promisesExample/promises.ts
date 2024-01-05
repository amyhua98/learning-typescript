/**
 * 
Promises are a feature in JavaScript that allow you to work with asynchronous code in a more organized and manageable way. 
They provide a cleaner syntax for dealing with callbacks and help avoid the so-called "callback hell" or "pyramid of doom." 
Promises represent the eventual completion or failure of an asynchronous operation and allow you to handle the result or error in a more structured manner.

A Promise can be in one of three states:

Pending:

The initial state. The promise is neither fulfilled nor rejected.
Fulfilled (Resolved):

The operation completed successfully, and the promise has a resulting value.
Rejected:

The operation encountered an error or was unsuccessful, and the promise has a reason for the failure.
Here's a basic example of using a Promise:
 */
function fetchBook(): Promise<string> {
    return new Promise((resolve, reject) => {
      // Simulate an asynchronous operation
      setTimeout(() => {
        const success = true; // or false to simulate failure
  
        if (success) {
          resolve("Your favorite book is here!");
        } else {
          reject("Sorry, couldn't find your book.");
        }
      }, 1000);
    });
  }
  
  // Using the Promise
  fetchBook()
    .then((result: string) => {
      console.log("Success:", result);
    })
    .catch((error: string) => {
      console.error("Error:", error);
    });
  

    /**
     * 
In this TypeScript version:

The fetchBook function is explicitly declared to return a Promise<string>, indicating that it will eventually provide a string result.

The resolve function is called with a string when the operation is successful, and the reject function is called with a string when there's an error.

The then and catch methods are used to handle the success and error cases, respectively. The types of the result and error are specified as string in this example.

TypeScript allows you to specify the types of data that your functions will work with, providing additional safety and better tooling support.
     */