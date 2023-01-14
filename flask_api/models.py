from db import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, unique=True, nullable=False)
    password = db.Column(db.String, nullable=False)

class Post(db.Model):
    def to_dict(self):
        return {
            'id': self.id,
            'content': self.content,
            'author_username': self.author_username
        }
    
    id = db.Column(db.Integer, primary_key=True)
    author_username = db.Column(db.String, nullable=False)
    content = db.Column(db.String)
