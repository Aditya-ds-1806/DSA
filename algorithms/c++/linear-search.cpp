/*
* Linear search
* Time complexity - O(n)
*/

#include <iostream>

int search(int *arr, int size, int query)
{
    for (int i = 0; i < size; i++)
    {
        if (arr[i] == query)
            return i;
    }
    return -1;
}

int main()
{
    int array[]{1, 2, 3, 4, 5, 6, 7};
    int size{sizeof(array) / sizeof(array[0])};
    std::cout << search(array, size, 5) << std::endl;
    std::cout << search(array, size, 10) << std::endl;
    return 0;
}
