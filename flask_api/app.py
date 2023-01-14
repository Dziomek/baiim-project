from flask import Flask, make_response, request
from flask_cors import CORS 
from db import db
from models import User, Post

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///project.db"
CORS(app)
db.init_app(app)

with app.app_context():
    db.create_all()

@app.route('/')
def index():
    return "Hello World"


@app.route('/register', methods=['POST'])
def register():
    username = request.json.get("username")
    password = request.json.get("password")
    confirm_password = request.json.get("confirmPassword")

    if not (username and password and confirm_password):
        response = make_response({
            'error_message': 'Missing data. Please try again'
        })
    elif password != confirm_password:
        response = make_response({
            'error_message': 'Passwords do not match'
        })
    else:
        user = User(
            username=username,
            password=password
        )
        db.session.add(user)
        db.session.commit()
        response = make_response({
            'message': 'User created successfully',
            'account_created': True
        })
    
    return response

@app.route('/login', methods=['POST'])
def login():
    username = request.json.get("username")
    password = request.json.get("password")
    user = User.query.filter_by(username=username, password=password).first()
    
    if user:
        response = make_response({
            'message': 'User logged in successfully',
            'logged_in': True
        })
    else:
        response = make_response({
            'error_message': 'Invalid credentials. Please try again'
        })

    return response

if __name__ == '__main__':
    app.run()

@app.route('/posts/<username>', methods=['GET'])
def get_posts(username):
    posts = Post.query.filter_by(author_username=username).all()
    response = make_response({
        'posts': [post.to_dict() for post in posts]
    })
    return response

@app.route('/submit-post', methods=['POST'])
def submit_post():
    username = request.json.get("username")
    content = request.json.get("content")

    new_post = Post(author_username=username, content=content)
    db.session.add(new_post)
    db.session.commit()

    response = make_response({
        'message': 'Post added successfully'
    })
    return response