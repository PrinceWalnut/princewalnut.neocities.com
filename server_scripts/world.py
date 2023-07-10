from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app) #Enable CORS for all routes

@app.route('/hello', methods=['POST'])
def hello():
    return "Howdy there!\n"

if __name__ == '__main__':
    app.run()
