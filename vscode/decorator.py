from functools import partial
def add(func):
    def inner(*a):
        return func(*a)
    return inner
@add
def add4(n1,n2,n3,n4):
    return n1+n2+n3+n4
@add
def add3(n1,n2,n3):
    return n1+n2+n3
@add
def add2(n1,n2):
    return n1+n2
print(add2(3,4))
print(add3(3,4,1))
print(add4(3,4,1,2))