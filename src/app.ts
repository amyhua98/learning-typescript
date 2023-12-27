abstract class Department {
    static year = 2023
    // private id: string;
    // private name: string;
    protected employees:string[] = [];

    constructor(protected readonly id: String, private name: string) {
        //this.id = id;
        //this.name = n;
    }

    static createEmployee(name: string){
        return {name: name}
    }

    abstract describe(this: Department): void

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

    describe() {
        console.log('IT Department ID: ' + this.id)
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment

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

    private constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0]
    }
    //singleton - use when we only want one instance of an object (ex. account department - we only need one account department)
    static getInstance() {
        if (AccountingDepartment.instance){
            return this.instance
        }
        this.instance = new AccountingDepartment('0002', [])
        return this.instance
    }

    describe() {
        console.log('Accounting Department ID: ' + this.id)
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

const employee1 = Department.createEmployee("Amy")
console.log(employee1)

const it = new ITDepartment('0001', ['it'])

it.addEmployee('Boba')
it.addEmployee('Buko')
it.addEmployee('Anna')

it.describe()
it.printEmployeesInfo()

// const accounting = new AccountingDepartment('0002', [''])

const accounting =  AccountingDepartment.getInstance()
const accounting2 =  AccountingDepartment.getInstance()


console.log(accounting)
console.log(accounting2)


accounting.mostRecentReport = 'Year End Report'

console.log(accounting.mostRecentReport)

accounting.addEmployee('Anna')

accounting.addReport("first thing firsts im the realest")

// accounting.printReports()
// accounting.printEmployeesInfo()

accounting.describe()
// const itCopy = { name: 'dummy', describe: it.describe }

// itCopy.describe()
//testing testing

