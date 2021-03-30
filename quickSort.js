// qciksort is follow the devie and concore approach.
/*
1.if  arr.length ==1, return arr
2.take a pivot compair with whole element of  arr.
3. take two empty arr left and rigth, if ele is less than pivot than push it in the 
   left arr, other wise in right arr.
4. if left and rigth arr length > 0, 
   then terun it with recursive function--->[...fun(leftarr), pivot, ...fun(right)] 
5. else if leftarr length > 0 then retun [...fun(leftarr),pivot] 
  else return [pivot,  ...fun(rigtharr)]    
*/
/********************************************************************** */
function quickSort(arr) {
    if (arr.length === 1) {
        return arr;
    }

    const pivot = arr[arr.length - 1];
    const leftArr = [];
    const rightArr = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            leftArr.push(arr[i]);
        } else {
            rightArr.push(arr[i]);
        }
    }

    if (leftArr.length > 0 && rightArr.length > 0) {
        return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];

    } else if (leftArr.length > 0) {
        return [...quickSort(leftArr), pivot];
    } else {
        return [pivot, ...quickSort(rightArr)];
    }
}

const array = [1, 4, 2, 8, 345, 43, 32, 564, 63, 123, 2, 55, 1, 243];
console.log(quickSort(array));