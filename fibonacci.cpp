#include <iostream>

using std::cout;
using std::endl;

int fibonacci(int n){
	int memo[n];

	memo[0] = 0;
	memo[1] = 1;

	for (int i = 2; i < n; ++i){
		memo[i] = memo[i - 2] + memo[i - 1];
	}
	return memo[n - 1] + memo[n - 2];
}

int main(){

	cout<<fibonacci(15)<<endl;
	cout<<fibonacci(20)<<endl;

}
