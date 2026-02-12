
const obj = {
    a: 10,
    b: 20,
    sum() {
        return this.a + this.b;
    }
}

const res = obj.sum.bind(obj);
console.log(res());