from flask import Flask

app = Flask(__name__, static_url_path='', static_folder='static')
app.config.from_pyfile('config.py')


from app.routes import index

@app.cli.command()
def initdb():
    """Initialize the database."""
    print('Init the db')
