#include <iostream>
using namespace std;
int main()
{
  int arr[10] = {1, 2, 3, 4, 5};
  int n = 5;
  int element = 10;
  int position = 2;
  cout << "original array" << endl;
  for (int i = 0; i < n; i++)
  {
    cout << arr[i];
  };
  cout << endl;
  for (int i = n; i >= position; i--)
  {
    arr[i + 1] = arr[i];
  }
  cout << endl;
  arr[position] = element;
  n = n + 1;
  cout << "array after inserting" << "element at a position" << endl;
  for (int i = 0; i < n; i++)
  {
    cout << arr[i];
  }
  return 0;
}