from abc import ABC,abstractmethod
class abstcls(ABC):
    @abstractmethod
    def sam1(self):
        pass
    def sam2(self):
        print('Concrete method 1')
class abscls2(ABC):
    @abstractmethod
    def s1(self):
        pass
    def s2(self):
        print('Concrete method 2')
class interface1(ABC):
    @abstractmethod
    def int1(self):
        pass
class interface2(ABC):
    @abstractmethod
    def i1(self):
        pass
class sample(abstcls,abscls2):
    def sam1(self):
        print('This is abstract method')
    def s1(self):
        print('this is abstract method 2')
class sample2(interface1,interface2):
    def int1(self):
        print('This is abstract method in interface')
    def i1(self):
        print('this is abstract method 2 in interface')
o=sample()
o.s1()
o.s2()
o.sam1()
o.sam2()
o1=sample2()
o1.i1()
o1.int1()