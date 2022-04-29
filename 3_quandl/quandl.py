import os
import quandl
import pandas as pd
import numpy as np

import matplotlib.pyplot as plt
import seaborn as sns


#quandl.ApiConfig.api_key = os.environ.get("SECRET_KEY")
#my_data = quandl.get("YALE/SPCOMP")


#my_data.to_csv("daily_information.csv")

df = pd.read_csv("daily_information.csv")

#df.info()
#print(df.tail())
#print(df.head())
#print(df.columns)
#print(df.describe().transpose())


plt.figure(dpi=100)
sns.set_theme(style="darkgrid")
sns.kdeplot(data=df, x='Earnings')
sns.kdeplot(data=df, x='Dividend')
sns.kdeplot(data=df, x='CPI')
sns.kdeplot(data=df, x='Long Interest Rate')
sns.relplot(x="Dividend", y="Earnings", data=df)
plt.show()
