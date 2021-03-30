//mergesort follow the divide and concore approch, it means 
// it devide the problem into subproblem and solve those all
// subproblem




//console.log(merge(left, right))
// this is the divide for sorting with the help of above function.
// here code for sorting
function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right)
}


// const left = [2,3,4,6,8]
// const right = [5,3,7,5,9]
// this is the coding for merge

function merge(left, right) {
    let sortedArr = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sortedArr.push(left.shift());
        } else {
            sortedArr.push(right.shift());
        }
    }
    return [...sortedArr, ...left, ...right]
}



const arr = [4, 5, 3, 1, 45, 67, 4, 34, 67, 876, 2, 34, 1, 3445];
console.log(mergeSort(arr));