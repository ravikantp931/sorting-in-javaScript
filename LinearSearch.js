/*
linear search
1. linear search is used for search find the position of element.
2. this is apply on the unsorted arr.
approch
1. take ele wich of find the position.
2. compare the given ele with all the arr of element of arr.
3. if given ele is equal to the arr of element of arr then return the index of element.
*/

const arr = [4, 2, 6, 90, 23, 56, 1, 32];
const linearSeach = ele => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == ele) {
            var index = i;
        }
    }
    return index;
}
console.log(linearSeach(56));