from flask import Flask, jsonify, redirect, url_for, request
from flask_cors import CORS
import requests

# Flask setup
app = Flask(__name__)
CORS(app)


# Global Variables
BASE_URL = "http://20.244.56.144"
# It can also be setup in Environment Variables
API_CREDENTIALS = {
    "companyName": "Siddharth Travels",
    "clientID": "8a222766-e685-426d-95b4-13c2cb98ef7c",
    "clientSecret": "xIkkgnFCpmGyNKcN",
    "ownerName": "Siddharth",
    "ownerEmail": "koyugurasiddhardha@gmail.com",
    "rollNo": "20VE1A6689"
}
# Auth Token Data
AUTH_TOKEN_DATA = {}


# REST API's
@app.route("/")
def home():
    # response = requests.post(f'{BASE_URL}/train/auth', json=API_CREDENTIALS)
    # print(response.json())
    return jsonify({"hello":"hello"})


@app.route("/get-auth-token")
def get_auth_token():
    global AUTH_TOKEN_DATA
    response = requests.post(f'{BASE_URL}/train/auth', json=API_CREDENTIALS)
    AUTH_TOKEN_DATA = response.json()
    return AUTH_TOKEN_DATA

@app.route("/getAllTrains")
def get_all_trains():
    try:
        headers = {
            'Authorization': f'Bearer {AUTH_TOKEN_DATA["access_token"]}'
        }
        response = requests.get(f'{BASE_URL}/train/trains', headers=headers)
        return response.json()
    except Exception as e:
        # Enters this block if auth token expires
        get_auth_token()
        return redirect(url_for('get_all_trains'))
        # print("error", e)
    
# @app.route("/getTrainByNumber/<int:num>")
# def get_train_by_number(num):
#     try:
#         headers = {
#             'Authorization': f'Bearer {AUTH_TOKEN_DATA["access_token"]}'
#         }
#         response = requests.get(f'{BASE_URL}/train/trains/{num}', headers=headers)
#         return response.json()
#     except:
#         # Enters this block if auth token expires
#         get_auth_token()
#         return redirect(url_for('get_train_by_number',num=num))