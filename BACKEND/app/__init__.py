from fastapi import FastAPI

def create_app():
    app = FastAPI()

    from . import db

    app.include_router(db.router, prefix="/db", tags=["db"])

    return app
