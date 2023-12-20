class Department {
    // private id: string;
    // private name: string;
    employees:string[] = [];

    constructor(private readonly id: String, private name: string) {
        //this.id = id;
        //this.name = n;
    }

    describe(this: Department){
        console.log(`Department:( ${this.id}): ${this.name} `)
    }
    addEmployee(employee: string) {
        this.employees.push(employee)
    }

    printEmployeesInfo(){
        console.log(this.employees.length)
        console.log(this.employees)
    }
}

class ITDepartment extends Department {
    admins: string []
    constructor(id: string, admins: string[]) {
        super(id, 'IT');
        this.admins = admins
    }
}

const accounting = new ITDepartment('0001', 'Accounting')

accounting.addEmployee('Boba')
accounting.addEmployee('Buko')

accounting.employees[2] = 'Anna'

accounting.describe()
accounting.printEmployeesInfo()

// const accountingCopy = { name: 'dummy', describe: accounting.describe }

// accountingCopy.describe()
//testing testing

