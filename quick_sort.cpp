#include <iostream>
#include <vector>

using std::vector;
using std::cout;
using std::endl;

void swapOwn(int* a, int* b){
   int t = *a;
   *a = *b;
   *b = t;
}

int pivot(int nums[], int low, int high){
   int pivot = nums[high];
   int i = (low - 1);

   for (int j = low; j <= high - 1; ++j){
      if (nums[j] < pivot){
         ++i;
         swapOwn(&nums[i], &nums[j]);
      }
   }
   swapOwn(&nums[i + 1], &nums[high]);
   return (i + 1);
}
void quickSort(int nums[], int left, int right){
   if (left < right){
      int pivotIndex = pivot(nums, left, right);
      quickSort(nums, left, pivotIndex - 1);
      quickSort(nums, pivotIndex + 1, right);
   }
}
int main(){
   int testNums[] = {12, 96, 3,  35, 2, 5, 1};
   quickSort(testNums, 0, 6);
   for (auto num : testNums)
      cout<<num<<" ";
   cout<<"\n";
}
