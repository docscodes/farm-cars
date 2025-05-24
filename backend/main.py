from fastapi import FastAPI
from motor import motor_asyncio
from config import BaseConfig
from routers.cars import router as cars_router
from routers.users import router as users_router

settings = BaseConfig()


async def lifespan(app: FastAPI):
    app.client = motor_asyncio.AsyncIOMotorClient(settings.DB_URL)
    app.db = app.client[settings.DB_NAME]
    
    try:
        app.client.admin.command("ping")
        print("Pinged your deployment. You have successfully connected to MongoDB!")
    except Exception as e:
        print(e)
        
    yield
    app.client.close()


app = FastAPI(lifespan=lifespan)
app.include_router(cars_router, prefix="/cars", tags=["cars"])
app.include_router(users_router, prefix="/users", tags=["users"])

@app.get("/")
async def get_root():
    return {"Message": "Root working!"}
