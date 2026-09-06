// findLargest.js

let arr = [5, 0, 10, 8, 17, 1, 89];
let largest;

function findLargest() {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arr[i + 1]) {
            largest = arr[i + 1];
        }
    }
    return largest;
}

let res = findLargest();

console.log(res)