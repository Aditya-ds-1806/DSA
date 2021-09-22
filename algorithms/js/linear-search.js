/*
* Linear search
* Time complexity - O(n)
*/

const search = function (arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) return i;
    }
    return -1;
}

// driver code

const array = [1, 2, 3, 4, 5, 6, 7];
console.log(search(array, 6));
console.log(search(array, 10));
