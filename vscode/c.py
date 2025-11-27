class My_class:
    def __init__(self ,name:str,age:int):
        self.name=name
        self.age=age
    def __str__(self):
        return(f"{self.name} is {self.age} years old")
s1=My_class('Gopi',23)
print(s1)
