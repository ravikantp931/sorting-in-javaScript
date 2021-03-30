/*
selection sort
it reverse approch of bubble sort
in this technique comapair first element withe the whole arr of element which is smaller.
when we get the smaller element then it repalce at their 1st possition element. and after that
now take second element of arr and compair with whole arr and find smallest element and then replace at
2nd position. and then take the third ele.....and so on
finally we get the sorted arr.
approch
1.take 1st ele compair with all ele
2. find the smallest ele(mark the smallest ele,)
2. swape with taking ele(1st ele and marked element)
3. repeat step 2 and 3 untill get sorted arr
   
*/


const arr = [5, 23, 12, 21, 16, 3, 27, 2, 19, 1, 6];

function selectionSort() {
    for (let i = 0; i < arr.length; i++) {
        let minindex = i
        for (let j = 1 + i; j < arr.length; j++) {
            if (arr[j] < arr[minindex]) {
                minindex = j;

            }
        }
        let temp = arr[i];
        arr[i] = arr[minindex];
        arr[minindex] = temp;
    }
    return arr;
}

console.log(selectionSort(arr));