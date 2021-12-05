const arr1 = [1, 2, 3];
const arr2 = [0];
const arr3 = [9];

function solve(arr) {
    let ar = (parseInt(arr.join(""))+1).toString();
    // return ar.split("");
    // return Array.from(ar);
    return [...ar];
}

console.log(solve(arr1));
console.log(solve(arr2));
console.log(solve(arr3));