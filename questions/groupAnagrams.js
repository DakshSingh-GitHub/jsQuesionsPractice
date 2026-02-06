const arr = ["eat", "tea", "tan", "ant", "bat"];
let out_arr = {};
arr.forEach((ele) => {
    sp_el = ele.split("").sort();
    if (!out_arr[sp_el]) { out_arr[sp_el] = [ele] } 
    else { out_arr[sp_el].push(ele) }
});

for (const [key] of Object.entries(out_arr)) {
    console.log(out_arr[key].join(" "));   
}
