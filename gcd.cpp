#include <iostream>

using std::cout;
using std::endl;


int gcd(int m, int n){
	if (m == 0)
		return n;
	return gcd(n, m % n);

}

int main(){
	cout<<gcd(105, 30)<<endl;
}

