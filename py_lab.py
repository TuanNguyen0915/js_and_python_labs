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
# def duplicatedCount(text):
#     new_dict = {item: text.lower().count(item) for item in text}
#     count = 0
#     for v in new_dict.values():
#         if v > 1:
#             count += 1
#     return count

# ************************************
# Enough is enough!
# Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times.
# He tells them that he will only sit for the session if they show the same motif at most N times. Luckily, Alice and Bob are able to encode the motif as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

# Task
# Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
# For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
# With list [20,37,20,21] and number 1, the result would be [20,37,21].


# def deleteNth(lst, n):
#     res = []
#     for i in lst:
#         lst_len = len([item for item in res if item == i])
#         if lst_len == n:
#             continue
#         else:
#             res.append(i)
#     return res

# print(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3))


# *************************** ex4
# You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

# Examples
# [7, 1]  =>  [1, 7]
# [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
# [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]


# def sortTheOdd(lst):
#     odds = sorted([i for i in lst if i % 2 != 0])
#     # # Using for loop
#     # res = []
#     # for item in lst:
#     #     if item % 2 != 0:
#     #         res.append(odds[idx])
#     #     else:
#     #         res.append(item)
#     # return res
#     ## List comprehension (Best way)
#     return [item if item % 2 == 0 else odds.pop(0) for item in lst]
#     ## Using map and lambda
#     # return list(map(lambda i: i if i % 2 == 0 else odds.pop(0), lst))


# print(sortTheOdd([1, 11, 2, 8, 3, 4, 5]))


# ************************ ex5
# Complete the solution so that the function will break up camel casing, using a space between words.

# Example
# "camelCasing"  =>  "camel Casing"
# "identifier"   =>  "identifier"
# ""             =>  ""


# def camelCase(str):
#     return "".join([f" {c}" if c.isupper() else c for c in str])


# print(camelCase("TuanNguyen"))


# ******************* ex6
# Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

# moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]


def moveZeroes(arr):
    res, zero_lst = [], []
    [res.append(c) if c != 0 else zero_lst.append(c) for c in arr]
    return res + zero_lst


print(moveZeroes(["false", 1, 0, 1, 2, 0, 1, 3, "a"]))
