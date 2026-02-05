
const carr = [1, 2, 3, 4, 5, 6, 7, 8, 10, 9]

function isSorted(arr) {
    for ( let i = 1; i < arr.length; i++ ) {
        if ( arr[i] < arr[i-1] ) { return false; }
    } return true;
}

console.log(isSorted(carr));
