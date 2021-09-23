/* 
* Bubble sort
* Time complexity - O(n^2)
*/

const sort = function (arr, compare) {
    for (let i = 0; i < arr.length; i++) {
        let swapped = false;
        for (let j = 1; j < arr.length - i; j++) {
            if (compare(arr[j - 1], arr[j])) {
                [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
                swapped = true;
            }
        }
        if (!swapped) break;
    }
    return arr;
}

// driver code

const arr = [56, 78, 11, 23, 8, 12];
console.log(sort(arr, (a, b) => a < b));
console.log(sort(arr, (a, b) => a > b));
