/* 
* Binary search
* Time complexity - O(log(n))
*/

#include <iostream>

int search(int *arr, int size, int query)
{
    int start{0};
    int end{size - 1};
    while (start != end)
    {
        int mid = (start + end) / 2;
        if (arr[mid] < query)
        {
            start = mid + 1;
        }
        else if (arr[mid] > query)
        {
            end = mid - 1;
        }
        else
        {
            return mid;
        }
    }
    return arr[start] == query ? start : -1;
}

int main()
{
    int numbers[]{1, 2, 3, 4, 5, 6, 6, 7, 7, 8};
    int size = sizeof(numbers) / sizeof(numbers[0]);
    std::cout << search(numbers, size, 7) << std::endl;
    std::cout << search(numbers, size, 96) << std::endl;
    return 0;
}
