/*
Bubble sort
in this technique the element is compairing with its adjusent element.
after 1 pass compairision we get the highest element at end of arr.
so we doing till all the element in arr are sorted.
approch
1. compair the each element of its adjusent.
2. using two loops, one for the iterat the array and other is for many pass. 
*/

var arr = [12, 23, 10, 14, 72, 2, 8, 6, 18];
const BubbleSort = () => {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
console.log(BubbleSort(arr));





























// const arr1 = [2, 23, 12, 6, 24, 8, 7, 5];

// function bubbleSort(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {

//         for (let j = 0; j < arr.length - 1 - i; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 const temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr;
// }
// console.log(bubbleSort(arr1))