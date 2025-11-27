# class Singleton():
#     _instance = None
#     def __new__(cls,*args,**kargs):
#         if cls._instance is None:
#             cls._instance = super().__new__(cls)
#         return cls._instance

# class Burger():
#     def __init__(self) -> None:
#         self.items = []
#     def __str__(self):
#         return '+'.join(self.items)

# class BurgerBuilder():
#     def __init__(self) -> None:
#         self.burger=Burger()
#     def add_paddy(self,s:str):
#         self.burger.items.append(s)
#         return self
#     def add_chese(self,s:str):
#         self.burger.items.append(s)
#         return self
#     def build(self):
#         return self.burger
# # b = BurgerBuilder().add_paddy('veg paddy').add_chese('amul chese').build()
# # print(b)
# class Shape_Not_Found(Exception):
#     pass

# class Square():
#     def __init__(self,side) -> None:
#         self.side = side
#     def __str__(self):
#         return f' A Square of side {self.side} is created'
# class Rectangle():
#     def __init__(self,l,b) -> None:
#         self.length = l
#         self .breath = b
#     def __str__(self):
#         return f' A Rectangle of length {self.length}, breath {self.breath} is created'
# class Circle():
#     def __init__(self,r) -> None:
#         self.radius = r
#     def __str__(self) -> str:
#         return f'A Circle with radius {self.radius} is created'
    
# class ShapeFactory():
#     _shapes=['circle','rectangle','square']
#     @staticmethod
#     def register(name:str):
#         if name.lower() not in ShapeFactory._shapes:
#             ShapeFactory._shapes.append(name.lower())
#     @classmethod
#     def create(cls, name: str, **kwargs):
#         if name.lower() not in cls._shapes:
#             raise Shape_Not_Found(f"{name} is not a valid shape")
#         return cls._shapes[name.lower()](**kwargs)
# class triangle():
#     def __init__(self,s1,s2,s3) -> None:
#         self.s1,self.s2,self.s3 = s1,s2,s3
#     def __str__(self) -> str:
#         return f'A Triange of sides {self.s1,self.s2,self.s3} is created'
# # ShapeFactory.register('triangle')
# # s = ShapeFactory.create('triangle',s1=5,s2=4,s3=3)
# # print(s)

# Subject (Observable)
class WeatherStation:
    def __init__(self):
        self._observers = []   # list of subscribers
        self._temperature = None

    def add_observer(self, observer):
        self._observers.append(observer)

    def remove_observer(self, observer):
        self._observers.remove(observer)

    def notify_observers(self):
        for observer in self._observers:
            observer.update(self._temperature)

    def set_temperature(self, temp):
        print(f"\n[WeatherStation] Temperature updated to {temp}°C")
        self._temperature = temp
        self.notify_observers()


# Observer interface
class Observer:
    def update(self, temperature):
        raise NotImplementedError


# Concrete Observers
class PhoneDisplay(Observer):
    def update(self, temperature):
        print(f"[PhoneDisplay] New temperature: {temperature}°C")


class LaptopDisplay(Observer):
    def update(self, temperature):
        print(f"[LaptopDisplay] Weather update: {temperature}°C")


class TVDisplay(Observer):
    def update(self, temperature):
        print(f"[TVDisplay] Broadcasting temperature: {temperature}°C")


# ✅ Usage
station = WeatherStation()

phone = PhoneDisplay()
laptop = LaptopDisplay()
tv = TVDisplay()

# Add observers
station.add_observer(phone)
station.add_observer(laptop)
station.add_observer(tv)

# Change state → all observers are notified automatically
station.set_temperature(25)
station.set_temperature(30)

# Remove an observer
station.remove_observer(tv)
station.set_temperature(28)
