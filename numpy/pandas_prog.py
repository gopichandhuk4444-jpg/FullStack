from ORMclasses import (Orders,Parent_orders,Products,engine,session)
import pandas as pd
from sqlalchemy import text

df=pd.read_csv(r"C:\Users\kvsna\OneDrive\Desktop\Python\numpy\CSVFiles\parent_orders.csv")
df.to_sql('parent_orders',engine,if_exists='replace')