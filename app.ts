function combine(input1: string | number, input2: string | number){
    let result;
    if (typeof input1 == 'number' && typeof input2 == 'number' ){
        result = input1 + input2
    } else {
        result =  input1.toString() + input2.toString()
    }
    return result
}

const combineAges = combine(22,23)
console.log(combineAges)

const combineNames = combine('Amy ','Hua')
console.log(combineNames)