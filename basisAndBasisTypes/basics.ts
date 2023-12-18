function addBasic(n1: number, n2: number, showResults: boolean, phrase: string){
    if (typeof n1 !== 'number' ||  typeof n2 !== 'number' ){
        throw new Error('Incorrect input!')
    }
    const result = n1 + n2
    if (showResults){
        console.log(phrase + result)
    } else{
        return n1 + n2
    }
}

const number1 = 5
const number2 = 2.8
const printResults = true
const resultPhrase = "Results is: "

addBasic(number1, number2, printResults, resultPhrase)