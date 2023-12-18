class Department {
    name: string;
    employees:string[] = [];

    constructor(n: string) {
        this.name = n
    }

    describe(this: Department){
        console.log('Department: ' + this.name)
    }
    addEmployee(employee: string) {
        this.employees.push(employee)
    }

    printEmployeesInfo(){
        console.log(this.employees.length)
        console.log(this.employees)
    }
}

const accounting = new Department('Accounting')

accounting.addEmployee('Boba')
accounting.addEmployee('Buko')

accounting.employees[2] = 'Anna'

accounting.describe()
accounting.printEmployeesInfo()

// const accountingCopy = { name: 'dummy', describe: accounting.describe }

// accountingCopy.describe()

