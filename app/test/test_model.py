# /usr/bin/python3

# python3 -m unittest -v app.test.test_model
import unittest
from app.models.utils import convert_data

data_text = """==================================================================
$ 1/1 - Абсд1
# 1- Вопрос 11
# 2- Вопрос 12
# 3- Вопрос 13
# 4- Вопрос 14
@ 5- Вопрос 15
===============================
$ 1/2 - Абсд2
# 1- Вопрос 11
@ 2- Вопрос 12
# 3- Вопрос 13
# 4- Вопрос 14
# 5- Вопрос 15
===============================
"""
data_to_json = [
    {
    "number": 1,
    "question": "Абсд1",
    "answers": [
        {
          "answer": 'Вопрос 11',
          "correct": False
        },
        {
          "answer": 'Вопрос 12',
          "correct": False
        },
        {
          "answer": 'Вопрос 13',
          "correct": False
        },
        {
          "answer": 'Вопрос 14',
          "correct": False
        },
        {
          "answer": 'Вопрос 15',
          "correct": True
        }
    ]},
    {
    "number": 2,
    "question": "Абсд2",
    "answers": [
        {
          "answer": 'Вопрос 11',
          "correct": False
        },
        {
          "answer": 'Вопрос 12',
          "correct": True
        },
        {
          "answer": 'Вопрос 13',
          "correct": False
        },
        {
          "answer": 'Вопрос 14',
          "correct": False
        },
        {
          "answer": 'Вопрос 15',
          "correct": False
        }
    ]},
];



class TestCase(unittest.TestCase):

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def testMessageClass(self):
        self.assertEqual(convert_data(data_text), data_to_json)


if __name__ == '__main__':
    unittest.main()
