from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from deta import Deta
import json
from passlib.context import CryptContext

router = APIRouter()

# Initialize Deta Base for users
d = Deta("c0K8UBPScWu2_8TpcymuxJz1W2i81Hz9SAbtcSKBZmr14")

@router.post("/{database}")
def create(data: dict, database : str):
    db = d.Base(database).put(data)    
    return { "data" : db }

@router.get("/{database}")
def read(database : str):
    db = d.Base(database).fetch().items
    return { "data" : db }

@router.put("/{database}")
def read(data: dict, database : str):
    print(data['key'])
    print(data)
    db = d.Base(database).put(data = data, key = data['key'])
    return { "data" : "db" }

@router.delete("/{database}")
def read(data: dict, database : str):
    print(data['key'])
    print(data)
    db = d.Base(database).delete(data['key'])
    return { "data" : "Data Deleted Successfully." }
