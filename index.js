const arr = [1, 2, 3, 4, 5, 6, 7, 8, 2, 3];
dct = {}
for (let i in arr) {
    dct[i] = (dct[i] || 0) + 1;
}
console.log(dct);
