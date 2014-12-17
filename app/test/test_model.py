# /usr/bin/python3

# python3 -m unittest -v app.test.test_model

import unittest
from app.models.utils import convert_data

data_text = """
==================================================================
$ 1/1 - Абсд1
# Вопрос 11
# Вопрос 12
# Вопрос 13
# Вопрос 14
@ Вопрос 15
===============================
$ 1/2 - Абсд2
# Вопрос 21
@ Вопрос 22
# Вопрос 23
# Вопрос 24
# Вопрос 25
===============================
"""
data_to_json = [
    {
    "number": 1,
    "question": "1/1 - Абсд1",
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
    "question": "1/2 - Абсд2",
    "answers": [
        {
          "answer": 'Вопрос 21',
          "correct": False
        },
        {
          "answer": 'Вопрос 22',
          "correct": True
        },
        {
          "answer": 'Вопрос 23',
          "correct": False
        },
        {
          "answer": 'Вопрос 24',
          "correct": False
        },
        {
          "answer": 'Вопрос 25',
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
        self.maxDiff = None
        self.assertEqual(convert_data(data_text), data_to_json)


if __name__ == '__main__':
    unittest.main()
