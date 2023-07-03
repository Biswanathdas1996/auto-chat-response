import logging
import utils
from flask import Flask, request, jsonify


logging.basicConfig(format='%(asctime)s - %(message)s', level=logging.INFO)


app = Flask(__name__)

# Enable CORS for all routes


@app.after_request
def add_cors_headers(response):
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Headers'] = 'Content-Type,Authorization'
    response.headers['Access-Control-Allow-Methods'] = 'GET,POST,PUT,DELETE,OPTIONS'
    return response


@app.route('/suggestions', methods=['POST'])
def suggestions():
    data = request.get_json()
    # Example usage
    client_message = data['message']
    reply = utils.generate_massage_reply(client_message)
    return jsonify({"response": reply}), 200


@app.route('/get-sentiment', methods=['POST'])
def sentiment():
    data = request.get_json()
    # Example usage
    client_message = data['message']
    reply = utils.get_sentiment(client_message)

    return jsonify({"response": reply}), 200


if __name__ == '__main__':

    app.run()
