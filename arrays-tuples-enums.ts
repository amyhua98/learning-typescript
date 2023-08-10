
const swe = 'software engineer'

enum Role {
    'SWE', 'QA', 'FE', 'BE'
}

const person = {
    name: 'Amy',
    age: 24,
    hobbies: ['Cooking', 'Painting', 'Gym'],
    role: Role.SWE
};

// person.role.push('software engineer')
// person.role[1] = 10

// const favoriteActivity = ['Eating']

for (const hobby of person.hobbies){
    console.log(hobby)
}

if (person.role === Role.SWE){
    console.log('I am a software engineer')
}
console.log(person);