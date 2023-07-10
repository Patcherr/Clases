/* class cliente {
    constructor(){

    }
    constructor(name,nro,dinero) {
        this._name = name;
        this._nro = nro;
        this._dinero = dinero
    }

    deposito(dinero){
        console.log(`Estoy depositando ${this.dinero} `  )
    }
    
    
} */
class Client {
    constructor(firstName, salary) {
        this.firstName = firstName
        this.salary = salary
        this.deposits = function deposits(money) {
            this.salary = this.salary + money
        }
        this.withdrawals = function withdrawals(money) {
            this.salary = this.salary - money
        }
    }
}

let firstName
do {
    firstName = prompt("Enter your name: ")
    if (firstName % 1 == 0) { alert("[Error] Invalid name, try again.") }
} while (firstName % 1 == 0)
console.log("Hola", firstName + "!!!")

let salary
do {
    salary = parseFloat(prompt("Enter your salary: "))
    if (salary % 1 != 0) { alert("[Error] Invalid value, try again.") }
} while (salary % 1 != 0)

let client1 = new Client(firstName, salary)
console.log('Client name: ' + client1.firstName)
console.log('Current Salary: ' + client1.salary)

let answer
let deposit
let withdraw
do {
    answer = prompt("Do you want to deposit or withdraw?")
    if (answer != "Deposit" && answer != "deposit" && answer != "Withdraw" && answer != "withdraw") {
        alert("[Error] Invalid answer, try again.")
    } else {
        if (answer == "Deposit" || answer == "deposit") {
            do {
                deposit = parseFloat(prompt("Enter the amount you want to deposit: "))
                if (deposit % 1 != 0) { alert("[Error] Invalid answer, try again.") }
            } while (deposit % 1 != 0)
            client1.deposits(deposit)
            console.log('You have deposited ' + deposit + ' ---->  New salary: ' + client1.salary)
        } else {
            if (answer == "Withdraw" || answer == "withdraw") {
                do {
                    withdraw = parseFloat(prompt("Enter the amount you want to withdraw: "))
                    if (withdraw % 1 != 0) { alert("[Error] Invalid answer, try again.") }
                } while (withdraw % 1 != 0)
                client1.withdrawals(withdraw)
                console.log('You have deposited ' + withdraw + ' ---->  New salary: ' + client1.salary)
            }
        }
    }
} while (answer != "Deposit" && answer != "deposit" && answer != "Withdraw" && answer != "withdraw")