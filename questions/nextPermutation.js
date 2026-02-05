
// With the same numbers
// you have to find the next greatest
// number. here, 23542 is the number
// will give 24532 -> 24235

const number = 23542;
const resNum = [];
number
    .toString()
    .split("")
    .forEach((ele) => resNum.push(parseInt(ele)));

let i = resNum.length - 2;

while (i >= 0 && resNum[i] >= resNum[i + 1]) {
    i--;
}

if (i >= 0) {
    let j = resNum.length - 1;
    while (resNum[j] <= resNum[i]) {
        j--;
    }
    [resNum[i], resNum[j]] = [resNum[j], resNum[i]];
}

let left = i + 1;
let right = resNum.length - 1;
while (left < right) {
    [resNum[left], resNum[right]] = [resNum[right], resNum[left]];
    left++;
    right--;
}

console.log(parseInt(resNum.join("")));
