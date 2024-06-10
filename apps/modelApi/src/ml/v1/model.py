import pickle
from pathlib import Path
import pandas as pd

BASE_DIR = Path(__file__).resolve(strict=True).parent


with open(f"{BASE_DIR}/model.pkl", "rb") as f:
    model = pickle.load(f)

def predict_pipeline(matchData):
    input_df = pd.DataFrame({
        'p0Rank': [matchData.p0Rank],  
        'p1Rank': [matchData.p1Rank]
    })

    pred = model.predict(input_df)
    if pred == 0:
        return matchData.p0Name
    return matchData.p1Name