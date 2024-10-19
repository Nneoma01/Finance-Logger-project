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
