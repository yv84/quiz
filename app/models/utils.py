import re

def convert_data(data):
    # split_asks -> split_stings -> get ask/ get answers -> push
    arr = []
    i = 1
    _data = data[data.find("$")+1:]
    for ask in _data.split("$"):
        _ask = "".join(["$", ask])
        obj = {"number": i, "answers": [], }
        for line in _ask.split("\n"):
            if line.startswith("$"): # in ("$", "#", "@"):
                print(line)
                obj["question"] = line[2:]
            elif line.startswith("#"):
                print(line)
                obj["answers"].append({"answer": line[2:], "correct": False})
            elif line.startswith("@"):
                print(line)
                obj["answers"].append({"answer": line[2:], "correct": True})
        arr.append(obj)
        i += 1
    return arr
