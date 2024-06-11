import { Customer } from "./Customer"

let myCustomer = new Customer("Angel", "Saha");

console.log(myCustomer.firstName)
console.log(myCustomer.lastName)

myCustomer.firstName = "Kure"
myCustomer.lastName = "Joki"

console.log(myCustomer.firstName)
console.log(myCustomer.lastName)