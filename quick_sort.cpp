#include <iostream>
#include <vector>


using std::vector;
using std::cout;
using std::endl;
using std::swap;


int partition(vector<int> nums, int start, int end){
   int pivot = nums[start];

   int count = 0;
   for (int i = 0; i <= end; ++i){
      if (nums[i] >= pivot)
         ++count;
   }

   int pivotIndex = start + count;
   swap(nums[pivotIndex], nums[start]);

   int i = start, j = end;

   while (i < pivotIndex && j > pivotIndex){
      while (nums[i] <= pivot){
         ++i;
      }
      while (nums[j] > pivot){
         --j;
      }
      if (i < pivotIndex && j > pivotIndex){
         swap(nums[++i], nums[--j]);
      }
   }
   return pivotIndex;
}

void quickSort(vector<int>nums, int start, int end){
   if (start >= end)
      return;

   int quickPartition = partition(nums, start, end);

   quickSort(nums, start, quickPartition - 1);
   quickSort(nums, quickPartition + 1, end);
}


int main(){
   vector <int> exampleNums = {9, 3, 7, 8, 1, 2, 3, 4};
   int length = exampleNums.size();
   quickSort(exampleNums, 0, length);

   for (int i = 0; i < length; ++i){
      exampleNums[i];
   }
}
