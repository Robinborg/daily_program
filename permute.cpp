#include <iostream>
#include <string>

using std::swap;
using std::cout;
using std::endl;
using std::string;


void permute(string strs, int l, int r) {
   if (l == r)
      cout << strs << endl;
   else {
      for (int i = 0; i <= r; i++) {
        swap(strs[l], strs[i]);
        permute(strs, l + 1, r);
        swap(strs[l], strs[i]);
     }
   }
}

int main() {
   string some_strs = "c+-";
   int n = some_strs.size();
   permute(some_strs, 0, n - 1);
   return 0;

}
