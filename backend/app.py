from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///books.db'
db = SQLAlchemy(app)

class Book(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100))

with app.app_context():
    db.create_all()

@app.route('/books', methods=['GET'])
def get_books():
    books = Book.query.all()
    return jsonify([{"id": book.id, "title": book.title} for book in books])

@app.route('/books', methods=['POST'])
def add_book():
    new_book = request.get_json()
    book = Book(title=new_book['title'])
    db.session.add(book)
    db.session.commit()
    return jsonify({"id": book.id, "title": book.title}), 201

if __name__ == '__main__':
    app.run(debug=True)