// searchAnElem.js

let arr = [1, 2, 3, 4, 20, 240]

function IsNum(num) {
    for (let i = 0; i < arr.length; i++) {
        //check elem with input 
        if (arr[i] == num) {
            return i;
        }
    }
    return -1;
}


let res = IsNum(240);
// let res = IsNum(40);
console.log(res)