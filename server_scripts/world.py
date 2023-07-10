from flask import Flask

app = Flask(__name__)

@app.route('/hello', methods=['POST'])
def hello():
    return "Howdy there!\n"

if __name__ == '__main__':
    app.run()
