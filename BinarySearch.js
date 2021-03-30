 /*
     Binary search
     1. binary search is used for search find the position of element.
     2. this is apply on the sorted arr.
     3. it works on recursively approach or devid and concore approch.
     4. it devide the problem in to subproblem and then solve all the sub problem.

     approch
     1. take the 1st, mid, and last element.
     2. if given ele is equal to the mid then return the index of mid element of arr.
     3. we compar the given ele with mid ele of arr .
     4. if give ele is less the mid of arr then last is mid-1, if given ele is greeater
        then mid then 1st is mid+1.
     5. step 4th is repeat till (1st<=last) given ele is equal to the mid of arr and 
        finally we return the index of mid of arr.   

     */


 const arr = [2, 4, 6, 7, 9, 12, 14, 16, 18];
 const Binaryseach = (ele, arr) => {
     let start = 0;
     let end = arr.length - 1;
     let mid = Math.floor((start + end) / 2);
     while (arr[start] <= arr[end]) {
         mid = Math.floor((start + end) / 2); //it necessary if it not write here then output will not show.
         if (ele == arr[mid]) {
             return mid;
         } else if (ele > arr[mid]) {
             start = mid + 1;
         } else {
             end = mid - 1;
         }
     }
     return -1;
 }
 console.log(Binaryseach(16, arr));