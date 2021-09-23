/* 
* Bubble sort
* Time complexity - O(n^2)
*/

#include <iostream>

void sort(int *arr, int size)
{
    for (int i = 0; i < size; i++)
    {
        bool swapped = false;
        for (int j = 1; j < size - i; j++)
        {
            if (arr[j - 1] > arr[j])
            {
                std::swap(arr[j - 1], arr[j]);
                swapped = true;
            }
        }
        if (!swapped)
            break;
    }
}

void print(int *arr, int size)
{
    std::cout << "{ ";
    for (int i = 0; i < size; i++)
    {
        std::cout << arr[i] << ", ";
    }
    std::cout << "\b\b }" << std::endl;
}

int main()
{
    int arr[] = {56, 78, 11, 23, 8, 12};
    int size = sizeof(arr) / sizeof(arr[0]);
    sort(arr, size);
    print(arr, size);
    return 0;
}
