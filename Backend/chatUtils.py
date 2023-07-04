
import json
import os


def chat(data):
    file_path = 'data/chat.json'
    if os.path.exists(file_path) and os.path.getsize(file_path) > 0:
        # Read the existing JSON data from the file
        with open(file_path, "r") as file:
            try:
                existing_data = json.load(file)
            except json.JSONDecodeError:
                existing_data = []
    else:
        existing_data = []
    if (existing_data):
        existing_data.append(data)
        with open(file_path, "w") as file:
            json.dump(existing_data, file)
    else:
        with open(file_path, "w") as file:
            json.dump([data], file)
