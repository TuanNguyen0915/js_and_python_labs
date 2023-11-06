# Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

# Examples
# pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
# pigIt('Hello world !');     // elloHay orldway !

# SOLUTION
# def pigIt(str):
#     punctuation = ["!", ",", ".", "?"]
#     new_lst = str.split(" ")
#     res = []
#     for item in new_lst:
#         if len(item) == 1:
#             res.append(item) if item in punctuation else res.append(item + "ay")
#         else:
#             res.append(item[1:] + item[0] + "ay")
#     return " ".join(res)

# print(pigIt("Pig latin is cool"))
# print(pigIt("Hello world !"))

# *********************************************
# EX2
# Count the number of Duplicates
# Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

# Example
# "abcde" -> 0 # no characters repeats more than once
# "aabbcde" -> 2 # 'a' and 'b'
# "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
# "indivisibility" -> 1 # 'i' occurs six times
# "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
# "aA11" -> 2 # 'a' and '1'
# "ABBA" -> 2 # 'A' and 'B' each occur twice


# SOLUTION
def duplicatedCount(text):
    new_dict = {item: text.lower().count(item) for item in text}
    count = 0
    for v in new_dict.values():
        if v > 1:
            count += 1
    return count

