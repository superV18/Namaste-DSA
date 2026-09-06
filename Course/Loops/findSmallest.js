// findSmallest.js

let arr = [1, 2, 3, -4, 5, 67];
let smallest = Infinity;
function findSmallest() {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i]
        }
    }
    return smallest;
}

let res = findSmallest();
console.log(res)