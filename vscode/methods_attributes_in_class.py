class m():
    v_a='Class variable'
    def __init__(self,n):
        self.v_b=f'instance variable {n}'
    def i_method(self):
        print('this is instance method',self.v_b,m.v_a)
    @classmethod
    def c_method(cls):
        print('this is class method',cls.v_a)
    @staticmethod
    def s_method(e):
        print(e,'=',eval(e))
if __name__=='__main__' :
    v1=m(1)
    v2=m(2)
    m.s_method('10+5*3')
