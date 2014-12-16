from app import app
from flask import jsonify, send_from_directory

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
    data = asks = [
        {
        "number": 1,
        "question": "ask1",
        "answers": [
            {
              "answer": 'answers1',
              "correct": False
            },
            {
              "answer": 'answers2',
              "correct": False
            },
            {
              "answer": 'answers3',
              "correct": False
            },
            {
              "answer": 'answers4',
              "correct": False
            },
            {
              "answer": 'answers5',
              "correct": True
            }
        ]},
        {
        "number": '2',
        "question": "ask2",
        "answers": [
            {
              "answer": 'answers21',
              "correct": False
            },
            {
              "answer": 'answers22',
              "correct": True
            },
            {
              "answer": 'answers23',
              "correct": False
            },
            {
              "answer": 'answers24',
              "correct": False
            },
            {
              "answer": 'answers25',
              "correct": False
            }
        ]},
        ];
    json_data = jsonify(asks=data)
    return json_data
