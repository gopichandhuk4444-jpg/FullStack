from sqlalchemy import (create_engine,Column,Integer,String,Float)
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

engine=create_engine('postgresql://postgres:1533@localhost:5432/pandas_db')
session=sessionmaker(bind=engine)()
Base=declarative_base()

class Parent_orders(Base):
    __tablename__='parent_orders'
    id=Column(Integer,primary_key=True)
    price=Column(Float,nullable=False)

class Orders(Base):
    __tablename__='orders'
    id=Column(Integer,primary_key=True)
    order_id=Column(Integer,nullable=False)
    product_id=Column(Integer,nullable=False)
    quantity=Column(Integer,nullable=False)
    unit_price=Column(Float,nullable=False)
class Products(Base):
    __tablename__='products'
    id=Column(Integer,primary_key=True)
    product_name=Column(String,nullable=False)
    price=Column(Float,nullable=False)
