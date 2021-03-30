/*
1. take variables min and max and initailize the 1st element of arr.
2. take the 1st element of arr and compair with all the elements of arr.
3. if any element is less or greater then intialize the value into the variable.
4. 3rd step iterate the hole element of arr.
*/


/*********************find max********************** */

const arr = [3, 5, 1, 9, 4, 8];
const Findmax = () => {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }

    }
    return max;
}
console.log(Findmax());

/**********************find min ************************ */


const Findmin = () => {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
console.log(Findmin());

/*******************find max-min both togather******************* */


const findmaxmin = () => {
    let min = arr[0];
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return [min, max];
}
console.log(findmaxmin());