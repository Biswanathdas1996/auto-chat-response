import logging
import utils
from flask import Flask, request, jsonify
import json
import chatUtils
logging.basicConfig(format='%(asctime)s - %(message)s', level=logging.INFO)


app = Flask(__name__)


@app.after_request
def add_cors_headers(response):
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Headers'] = 'Content-Type,Authorization'
    response.headers['Access-Control-Allow-Methods'] = 'GET,POST,PUT,DELETE,OPTIONS'
    return response


@app.route('/suggestions', methods=['POST'])
def suggestions():
    # data = request.get_json()
    # client_message = data['message']
    # reply = utils.generate_massage_reply(client_message)

    mock = "This is a mock response"
    return jsonify({"response": mock}), 200


@app.route('/get-sentiment', methods=['POST'])
def sentiment():
    data = request.get_json()
    client_message = data['message']
    reply = utils.get_sentiment(client_message)
    return jsonify({"response": reply}), 200


@app.route('/chat', methods=['POST'])
def chat():
    data = request.get_json()
    chatUtils.chat(data)
    return jsonify({"response": "success"}), 200


@app.route('/get-chat', methods=['GET'])
def get_data():
    file_path = 'data/chat.json'
    with open(file_path) as json_file:
        data = json.load(json_file)
    return jsonify(data)


@app.route('/reset-chat', methods=['GET'])
def reset_data():
    file_path = 'data/chat.json'
    empty_data = []
    with open(file_path, "w") as file:
        json.dump(empty_data, file)

    return jsonify({"response": "success"}), 200


if __name__ == '__main__':

    app.run()
