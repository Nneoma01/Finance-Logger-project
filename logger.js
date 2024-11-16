// const gender = "female";
// console.log(gender)
// const inputs = document.querySelectorAll("input");
// inputs.forEach(input =>{
//     console.log(input);
// });
// const circle = (diameter : number) => {
//     return diameter * 10;
// }
// console.log(circle(60))
// let age: any;
// age = 25;
// age = true;
// console.log(age);
// age = {
//     name: "Nneoma"
// }
// console.log(age)
// age = false;
// console.log(age)
// let greet: Function;
// greet = () => {
//     console.log('hello world');
// }
// const digits = (a: number, b: number, c: number | string = 10 )=>{
//     console.log(a+b);
//     console.log(c);
// }
// digits(10,5,20);
var Invoice = /** @class */ (function () {
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return "".concat(this.client, " owes \u00A3").concat(this.amount, " for ").concat(this.details);
    };
    return Invoice;
}());
var invOne = new Invoice('David', 'work on the website', 250);
var invTwo = new Invoice('Jane', 'work on the website', 300);
console.log(invOne, invTwo);
invOne.client = 'Chris';
invTwo.amount = 400;
console.log(invOne, invTwo);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
invoices.forEach(function (inv) {
    console.log(inv.format());
});
var form = document.querySelector('.new-item-form');
// console.log(form.children);
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
var button = document.querySelector('button');
// console.log(button);
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
