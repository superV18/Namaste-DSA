// write a fn to count the negative no. of elem present in an array

let arr = [2, -9, 17, 0, 1, -10, -4, 8];

function countNegative() {
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            counter = counter + 1;
        }
    }
    return counter;
}

let res = countNegative();

console.log(res);