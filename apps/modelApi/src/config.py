import os

from dotenv import load_dotenv

load_dotenv()

ROOT_PATH = os.getenv("ROOT_PATH", "http://127.0.0.1:8000")


class Settings:
    PROJECT_NAME: str = "FastAPI App"
    PROJECT_DESCRIPTION: str = "A simple FastAPI app"
    DB_URL: str = os.getenv("DB_URL")
    DB_API_KEY: str = os.getenv("DB_API_KEY")
    DB_EMAIL: str = os.getenv("DB_EMAIL")
    DB_PASSWORD: str = os.getenv("DB_PASSWORD")
    API_VERSION: str = "/api/v1"
    ROOT: str = ROOT_PATH


settings = Settings()
