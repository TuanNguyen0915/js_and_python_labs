# Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

# Examples
# pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
# pigIt('Hello world !');     // elloHay orldway !


def pigIt(str):
    punctuation = ["!", ",", ".", "?"]
    new_lst = str.split(" ")
    res = []
    for item in new_lst:
        if len(item) == 1:
            res.append(item) if item in punctuation else res.append(item + "ay")
        else:
            res.append(item[1:] + item[0] + "ay")
    return " ".join(res)
   
print(pigIt("Pig latin is cool"))
print(pigIt("Hello world !"))
