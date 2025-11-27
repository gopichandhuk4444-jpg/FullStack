from pydantic import BaseModel
from typing import Optional
from fastapi import FastAPI
app=FastAPI()
# import json
class employee(BaseModel):
    id: int
    name: str
    p_num: Optional[list[int]]=None
@app.post('/emp')
def write(emp: employee):
    return f'{emp.name} is an empoloyee with id {emp.id} and numbers {emp.p_num}'
# e1=employee(id=1,name='Gopi',p_num=[8019823312,2323445567])
# display(e1)
# de1=e1.model_dump()
# je1=e1.model_dump_json(indent=4)
# print(f'Employee as dict :  {de1}')
# print(f'Employee as json :  {je1}')
# e2=employee.model_validate(de1)
# e3=employee.model_validate_json(je1)
# print(f'serialzable e1 dict = {e2} and json  {e3}')
# print(f'e1_id={id(e1)}  e2_id={id(e2)}  e3_id={id(e3)}')
# print(f'de1 to json {json.dumps(de1)} \n json to dict {json.loads(je1)}')
# e2=employee(name='Ram',id=108)
# display(e2)
