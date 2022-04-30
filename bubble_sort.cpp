#include <iostream>
#include <vector>

using std::vector;
using std::swap;
using std::cout;
using std::endl;

void bubbleSort(vector<int> nums, int size){
   int i;
   int j; 
   for (i = 0; i < size; ++i){
      for (j = 0; j < size - i; ++j){
         if (nums[j] > nums[j + 1])
            swap(nums[j], nums[j + 1]);
      }
   }
}

int main(){
   vector <int> someExample{12, 231, 25, 2551};

   bubbleSort(someExample, someExample.size());

   for (auto num : someExample)
      cout<<num<<endl;
}
