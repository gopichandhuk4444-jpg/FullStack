from fastapi import FastAPI
from pydantic import BaseModel

app=FastAPI()

class emp(BaseModel):
    id : int 
    name : str
    salary :int
emps :list[emp]=[]
#create
@app.post('/')
def create(e:emp):
    emps.append(e)
    return 'Employee created sucessfully'
#update
@app.put('/{emp_id}')
def update(emp_id : int,update_emp:emp):
    for i,e in enumerate(emps):
        if e.id==emp_id:
            emps[i]=update_emp
            return 'Updated sucessfully'
@app.delete('/{emp_id}')
def delete(emp_id:int):
    global emps
    emps=[x for x in emps if x.id!=emp_id]
    return f'Employee with id {emp_id} is deleted'
@app.get('/')
def select():
    return emps