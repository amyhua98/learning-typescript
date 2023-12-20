class Department {
    // private id: string;
    // private name: string;
    protected employees:string[] = [];

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

class AccountingDepartment extends Department {
    private lastReport: string;

    get mostRecentReport() {
        if (this.lastReport){
            return this.lastReport
        } throw new Error('No reports')
    }

    set mostRecentReport(value: string) {
        if (!value){
            throw new Error ("Girly where is the value, you didn't put it in")
        }
        this.addReport(value)
    }

    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0]
    }
    addEmployee(name: string){
        this.employees.push(name)
    }
    addReport(text: string){
        this.reports.push(text)
        this.lastReport = text
    }
    printEmployeesInfo(): void {
        console.log(this.employees)
    }
    printReports() {
        console.log(this.reports)
    }
}

const it = new ITDepartment('0001', ['it'])

it.addEmployee('Boba')
it.addEmployee('Buko')
it.addEmployee('Anna')

it.describe()
it.printEmployeesInfo()

const accounting = new AccountingDepartment('0002', [''])
accounting.mostRecentReport = ''

console.log(accounting.mostRecentReport)

accounting.addEmployee('Anna')

accounting.addReport("first thing firsts im the realest")

accounting.printReports()
accounting.printEmployeesInfo()
// const itCopy = { name: 'dummy', describe: it.describe }

// itCopy.describe()
//testing testing

