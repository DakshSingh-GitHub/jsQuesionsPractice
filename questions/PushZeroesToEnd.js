let array = [10, 0, 3, 4, 7, 0, 2];

for ( let i = 0; i < array.length; i++ ) {
    if ( array[i] === 0 ) {
        array.push(array[i]);
        array.splice(i, 1);
    }
}

console.log(array);