
// const obj = {
//     a: 10,
//     b: 20,
//     sum() {
//         return this.a + this.b;
//     }
// }

// const res = obj.sum.bind(obj);
// console.log(res());

function check() { throw new Error("Parameter required") }

function displayDetails(name = check()) {
    if (name == 'N/A') { throw Error }
    console.log(name);
}

displayDetails();
