from fastapi import FastAPI,status,HTTPException,Response,Depends
from pydantic import BaseModel
import psycopg2
from psycopg2.extras import RealDictCursor
import models
from sqlalchemy.orm import session
from database import engine,SessionLocal



models.Base.metadata.create_all(bind=engine)
class posts_m(BaseModel):
    title:str
    content:str
    publish:bool=True
post : list[posts_m] =[]
app=FastAPI()

def get_db():
    db=SessionLocal()
    try:
        yield db
    finally:
        db.close()

try:
    conn=psycopg2.connect(host='localhost',database='fastapi_db',user='postgres',password=1533,cursor_factory=RealDictCursor)
    cursor=conn.cursor()
    print('Database connection is sucessfull')
except Exception as e:
    print('Connection failed')
    print(e)
@app.get('/posts')
def select_all():
    cursor.execute(""" select * from posts""")
    post=cursor.fetchall()
    return{'data':post}
@app.get('/sqlalchemy')
def test_post(db:session=Depends(get_db)):
    return{'Data':'sucess'}


@app.post('/posts',status_code=status.HTTP_201_CREATED)
def create(p:posts_m):
    cursor.execute(""" insert into posts(title,content,published) values(%s,%s,%s) returning * """,(p.title,p.content,p.publish))
    post=cursor.fetchone() 
    conn.commit()
    return {'Data':post}

@app.get('/posts/{p_id}')
def select_id(p_id: int):
    cursor.execute(""" SELECT * FROM POSTS WHERE ID = %s""",(str(p_id)))
    post=cursor.fetchone()
    if not post:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f'post with id:{p_id} not found')
    return ({'data':post})
@app.delete('/posts/{p_id}',status_code=status.HTTP_204_NO_CONTENT)
def delete(p_id:int):
    cursor.execute(""" DELETE FROM POSTS WHERE ID = %s returning *""",(str(p_id),))
    post=cursor.fetchone()
    conn.commit()
    if not post:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f'post with id:{p_id} not found')
    return Response(status_code=status.HTTP_204_NO_CONTENT)
@app.put('/posts/{p_id}')
def update(p_id:int,p:posts_m):
    cursor.execute(""" update posts set title=%s,content=%s,published=%s  where id=%s returning * """,(p.title,p.content,p.publish,str(p_id)))
    post=cursor.fetchone() 
    conn.commit()
    if not post:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f'post with id: {p_id} not found')
    return {'Data':post}

