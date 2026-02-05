const str = "My name is Daksh goosh noooshshshshshshshsh";

function numberOfSubstringOccurrence(str) { return str.split("sh").length - 1; }
console.log(numberOfSubstringOccurrence(str));
