const arr = [1, 2, 3, 4, 5, 6, 7, 8, 2, 3];
const freq = Object.create(null);
for (const value of arr) freq[value] = (freq[value] ?? 0) + 1;
for (const i in freq) if (freq[i] > 1) console.log(i, "=>", freq[i]);
