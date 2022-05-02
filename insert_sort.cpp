#include <iostream>
#include <vector>

using std::vector;
using std::cout;
using std::endl;


void insertSort(vector<int>&nums){
   for (int i = 0; i < nums.size(); ++i){
      int temp = nums[i];
      int j = i - 1;
      while (j >= 0 && temp <= nums[j]){
         nums[j + 1] = nums[j];
         j = j - 1;
      }
      nums[j + 1] = temp;
   }
}

int main(){

   vector <int> testNums{23, 265, 7, 8, 6, 4, 3, 2};
   insertSort(testNums);
   for (auto num : testNums)
      cout<<num<<endl;
}
