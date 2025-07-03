from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from processor import process_user_data

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "https://smart-data-dashboard.vercel.app"
        ],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return{"message":"Welcome to the Smart Dashboard API"}

@app.get("/stats")
def get_stats():
    stats = process_user_data()
    return stats