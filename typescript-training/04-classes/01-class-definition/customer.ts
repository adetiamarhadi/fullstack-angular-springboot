class Customer {
    firstName: string;
    lastName: string;

    constructor(firstName:string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let myCustomer = new Customer("Angel", "Saha");

console.log(myCustomer.firstName)
console.log(myCustomer.lastName)

myCustomer.firstName = "Kure"
myCustomer.lastName = "Joki"

console.log(myCustomer.firstName)
console.log(myCustomer.lastName)