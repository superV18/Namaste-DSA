// findSecondLargest.js

let arr = [4, 0, 2, 8, 7, 1, 8.9999991, 8.9999995];

function findSecondLargest() {
    let fLar = -Infinity;
    let sLar = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > fLar) {
            sLar = fLar;
            fLar = arr[i];
        }
        else if (sLar < arr[i]) {
            sLar = arr[i];
        }
    }
    return sLar;
}

let res = findSecondLargest();

console.log(res)