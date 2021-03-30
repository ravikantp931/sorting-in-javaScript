/*
insertion sort
1. take 1st ele and take one by one element cmpair with privous ele
approch
1. firstly iterate the arr by for loop(it is for take one by one ele)
2. 2nd loop is for compair the element with privious all element. this loop is depend on outer loop

*/

const arr = [12, 9, 11, 325, 46, 14, 34];

function insertiionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                const temp = arr[j];
                arr[j] = arr[j - 1]
                arr[j - 1] = temp;
            }
        }
    }
    return arr;
}
console.log(insertiionSort(arr));

/*******************other way*************************** */

// function insertionSort() {
//     for (let j = 0; j < arr.length; j++) {
//         for (let i = 0; i < arr.length; i++) {

//             if (arr[i] > arr[i + 1]) {
//                 let temp = arr[i];
//                 arr[i] = arr[i + 1];
//                 arr[i + 1] = temp;
//             }
//         }

//     }
//     return arr;
// }

// console.log(insertionSort(arr));