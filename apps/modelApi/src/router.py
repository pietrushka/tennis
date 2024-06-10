from fastapi import APIRouter
from src.endpoints.predictions import router as predictions_router

api_router = APIRouter()
api_router.include_router(predictions_router, prefix="/predictions", tags=["predictions"], responses={404: {"description": "Not founddddd"}})
