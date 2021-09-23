/*
* Binary search
* Time complexity - O(log(n))
*/

const search = function (arr, query) {
    let left = 0, right = arr.length - 1;
    while (left !== right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] < query) {
            left = mid + 1;
        } else if (arr[mid] > query) {
            right = mid - 1;
        } else {
            return mid;
        }
    }
    return arr[left] === query ? left : -1;
}

// driver code

const arr = [1, 2, 3, 4, 5, 5, 6, 7, 9];

console.log(search(arr, 7));
console.log(search(arr, 79));
