from flask import Flask, make_response
from flask_cors import CORS 

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return "Hello World"

@app.route('/api', methods=['POST'])
def api():
    response = make_response({'message': 'Success'})
    return response

if __name__ == '__main__':
    app.run()