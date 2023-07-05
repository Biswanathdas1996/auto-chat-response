import json


def mockResponse(file):
    with open(f"mock/{file}") as json_file:
        data = json.load(json_file)
        return data
