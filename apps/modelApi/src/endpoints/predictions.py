from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from src.ml.v1.model import predict_pipeline

router = APIRouter()

class PredictionRequest(BaseModel):
    p0Name: str
    p0Rank: int
    p1Name: str
    p1Rank: int

@router.post("/", status_code=200)
async def get_prediction(request: PredictionRequest):
    p0Name = request.p0Name
    p0Rank = request.p0Rank
    p1Name = request.p1Name
    p1Rank = request.p1Rank

    if not (p0Name and p0Rank is not None and p1Name and p1Rank is not None):
        raise HTTPException(status_code=400, detail="All player details must be provided")

    winner = predict_pipeline({
        "p0Name": p0Name,
        "p0Rank": p0Rank,
        "p1Name": p1Name,
        "p1Rank": p1Rank,
    })
    return {"winner": winner}