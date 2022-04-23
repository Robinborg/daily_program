import os
import quandl
import pandas as pd
import numpy as np



quandl.ApiConfig.api_key = os.environ.get("SECRET_KEY")
my_data = quandl.get("YALE/SPCOMP")

my_data.to_csv(index=False)

print(my_data.info)
print(my_data.describe().transpose)
print(my_data.head(5))

