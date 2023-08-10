function add(n1: number, n2: number){
    return n1 + n2
}

function printResult(num:number){
    console.log( 'Results: ' + num)
}

printResult(add(9,26))

let combineResults: (a: number, b: number) => number

combineResults = add
// combineResults = printResult
console.log(combineResults(8,8))
