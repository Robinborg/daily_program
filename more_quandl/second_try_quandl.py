import os
import quandl
import pandas as pd
import numpy as np



#quandl.ApiConfig.api_key = os.environ.get("SECRET_KEY")
#my_data = quandl.get("YALE/SPCOMP")
#
#
#my_data.to_csv("daily_information.csv")

df = pd.read_csv("daily_information.csv")

df.info()
print(df.tail())
print(df.head())
print(df.columns)
print(df.describe().transpose())

