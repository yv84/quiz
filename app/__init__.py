from flask import Flask
from flask.ext.sqlalchemy import SQLAlchemy

app = Flask(__name__, static_url_path='')
app.config.from_pyfile('config.py')
db = SQLAlchemy(app)


from app.routes import index

@app.cli.command()
def initdb():
    """Initialize the database."""
    print('Init the db')
