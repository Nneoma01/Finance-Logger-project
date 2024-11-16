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

class Invoice {
    constructor(
        public client: string,
        public details: string,
        public amount: number
    ){}
    

    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}

const invOne = new Invoice('David', 'work on the website', 250);
const invTwo = new Invoice('Jane', 'work on the website', 300);

console.log(invOne, invTwo);

invOne.client = 'Chris';
invTwo.amount = 400;
console.log(invOne, invTwo)



let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

console.log(invoices);

invoices.forEach(inv => {
    console.log(inv.format());
});




const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;
const button = document.querySelector('button')!;
// console.log(button);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    );
})