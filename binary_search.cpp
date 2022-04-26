#include <iostream>
#include <vector>

using std::cout;
using std::endl;
using std::vector;

int binarySearch(vector<int> numbers, int low, int high, int target){
	if (low <= high){

   	int mid = low + (high - low) / 2;
   
   	if (numbers[mid] == target)
   		return mid;
   	if (target < numbers[mid]){
   		return binarySearch(numbers, low, mid - 1, target);
   	}
   	if (target > numbers[mid]){
   		return binarySearch(numbers, mid + 1, high, target);
   	}
	}
   	return -1;
}

int main(){
	//vector<int>testNumbers = {1, 2, 3, 4, 5, 6, 7, 8, 9};
	vector<int>testNumbers = {8, 9};
	int testTarget = 9;
	cout<<binarySearch(testNumbers, 0, testNumbers.size(), testTarget)<<endl;
}
