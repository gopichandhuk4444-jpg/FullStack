from abc import ABC, abstractmethod

class Base1(ABC):
    CLASS_ATTR_1 = "Value from Base1"
    
    @abstractmethod
    def method1(self):
        pass

class Base2(ABC):
    CLASS_ATTR_2 = "Value from Base2"
    
    @abstractmethod
    def method2(self):
        pass

class Child(Base1, Base2):
    def method1(self):
        print(f"Child implementing method1. Accessing Base1 class attribute: {self.CLASS_ATTR_1}")
        print(f"Child implementing method1. Accessing Base1 class attribute via super(): {super().CLASS_ATTR_1}")

    def method2(self):
        print(f"Child implementing method2. Accessing Base2 class attribute: {self.CLASS_ATTR_2}")
        # In this specific case, super() in method2 might still find CLASS_ATTR_1 due to MRO
        # but to specifically target Base2, it's better to use explicit class name or understand MRO carefully
        print(f"Child implementing method2. Accessing Base2 class attribute via super(Base1, self).CLASS_ATTR_2: {super(Base1, self).CLASS_ATTR_2}")


    def access_attributes(self):
        print(f"\nAccessing attributes in Child class:")
        # Direct access (most common and recommended)
        print(f"Direct access to CLASS_ATTR_1: {self.CLASS_ATTR_1}")
        print(f"Direct access to CLASS_ATTR_2: {self.CLASS_ATTR_2}")

        # Access via super()
        # This will follow the MRO, so super().CLASS_ATTR_1 will go to Base1
        print(f"Access via super() for CLASS_ATTR_1: {super().CLASS_ATTR_1}") 
        
        # To access the attribute from a specific parent when there might be ambiguity or you need to control the order:
        print(f"Access via super(Base1, self) for CLASS_ATTR_2: {super(Base1, self).CLASS_ATTR_2}") # This explicitly calls Base2's CLASS_ATTR_2
        print(f"Access via Base1.CLASS_ATTR_1 directly: {Base1.CLASS_ATTR_1}")
        print(f"Access via Base2.CLASS_ATTR_2 directly: {Base2.CLASS_ATTR_2}")


# Inspect the Method Resolution Order (MRO)
print(f"MRO for Child: {Child.__mro__}")

# Create an instance and call the methods
child_instance = Child()
child_instance.method1()
child_instance.method2()
child_instance.access_attributes()
