from app import app
from flask import jsonify, send_from_directory


from app.models.utils import convert_data


@app.route('/')
def root():
    return app.send_static_file('index.html')


@app.route('/css/<path:filename>')
def send_css(filename):
    return send_from_directory('static/css', filename)

@app.route('/js/<path:filename>')
def send_js(filename):
    return send_from_directory('static/js', filename)

@app.route('/lib/<path:filename>')
def send_lib(filename):
    return send_from_directory('static/lib', filename)

@app.route('/views/<path:filename>')
def send_views(filename):
    return send_from_directory('static/views', filename)



@app.route('/ask.json')
def ask():
    with open("data/example.txt", "r") as f_data:
        data = convert_data(f_data.read())
    json_data = jsonify(asks=data)
    return json_data
