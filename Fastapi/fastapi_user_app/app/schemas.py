from pydantic import BaseModel, EmailStr
from datetime import datetime

# -------- Request Schema --------
class UserCreate(BaseModel):
    name: str
    email: EmailStr
    password: str

# -------- Response Schema --------
class UserResponse(BaseModel):
    id: int
    name: str
    email: EmailStr
    created_at: datetime

    class Config:
        orm_mode = True
