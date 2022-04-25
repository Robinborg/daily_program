#include <iostream>
#include <string>
#include <map>

using std::cout;
using std::endl;
using std::map;
using std::string;

int main(){
	map <string, float> bakery;
	bakery["ChocolateCake"] = 585.5;
	bakery["StrawBerryCake"] = 49.5;
	bakery["MangoCake"] = 85.5;
	bakery["VanillaCake"] = 912;

	map <string, float> :: iterator iter;

	cout<<"keys"<<" & "<<"values"<<endl;
	for (iter = bakery.begin(); iter != bakery.end(); ++iter){
		cout<<(*iter).first<<" "<<(*iter).second<<"\n";
	}

	return 0;
}

