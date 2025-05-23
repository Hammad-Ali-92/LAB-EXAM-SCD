#include <iostream>
using namespace std;
int main() {
    int arr[5] = {1, 2, 3, 4, 5};
    int *p = arr;
    cout << "Array elements using pointer: ";
    for (int i = 0; i < 5; i++) {
        cout << *(p + i) << " ";
    }
    cout << endl;

    // Using pointer arithmetic to access array elements
    cout << "Array elements using pointer arithmetic: ";
    for (int i = 0; i < 5; i++) {
        cout << p[i] << " ";
    }
    cout << endl;

    return 0;
}
