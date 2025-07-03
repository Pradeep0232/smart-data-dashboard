from pyspark.sql import SparkSession
from pyspark.sql.functions import col, avg
from datetime import datetime

def process_user_data():
    spark = SparkSession.builder.appName("DashboardStats").getOrCreate()
    df = spark.read.csv("data/user_data.csv", header=True, inferSchema=True)
    total_users = df.count()

    recent_date = datetime.strptime("2025-06-30", "%Y-%m-%d")
    active_users = df.filter(
        col("last_active_date") >= "2025-06-27"
    ).count()

    total_revenue = df.agg({"revenue":"sum"}).collect()[0][0]

    avg_session_time = df.agg(avg("session_time_minutes")).collect()[0][0]
    avg_session_time = round(avg_session_time,2)

    minutes = int(avg_session_time)
    seconds = int((avg_session_time-minutes)*60)
    formatted_time = f"{minutes}m {seconds}s"

    return{
        "totalUsers": total_users,
        "activeUsers": active_users,
        "revenue": total_revenue,
        "avgSessionTime": formatted_time,
    }