// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// function pigIt(str) {
//     const punctuation = ['!', ',', '.','?']
//     let newArr = str.split(" ")
//     return newArr.map(item => {
//         if (item.length === 1 ){
//             if (punctuation.includes(item)) return item
//             else return item + 'ay'
//         } else {
//             let newI = item.slice(1) + item[0] + 'ay'
//             return newI
//         }
//     }).join(" ")
// }

// console.log(pigIt("Hello world o ? !"));


//**************************************************** */
// EX2
// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

// SOLUTION
// function duplicateCount(text) {
//     let newArr = text.toLowerCase().split("")
//     let count = 0
//     let newObj = newArr.reduce((prev, char) => {
//         if (prev[char]) {
//             prev[char] += 1
//         }
//         else prev[char] = 1
//         return prev
//     }, {})
//     Object.keys(newObj).forEach(key => {
//         if (newObj[key] > 1) {
//             count += 1
//         }
//     }
//     )
//     return count
// }

// ******************************************* ex3/
// Enough is enough!
// Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times.
// He tells them that he will only sit for the session if they show the same motif at most N times. Luckily, Alice and Bob are able to encode the motif as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

// Task
// Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
// For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
// With list [20,37,20,21] and number 1, the result would be [20,37,21].

// SOLUTION
// function deleteNth(arr, n) {
//     const res = []
//     for (let i of arr) {
//         const arrLength = res.filter(item => item === i).length
//         if (arrLength && arrLength === n) {
//             continue
//         } else {
//             res.push(i)
//         }
//     }
//     return res
// }

// function deleteNth(arr, n) {
//     const res = []
//     for (let i of arr) {
//         const arrLength = res.filter(item => item === i).length
//         if (arrLength === n) continue
//         else res.push(i)
//     }
//     return res
// }


// ***************************** ex4
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// const sortOddNumber = arr => {
//     const odds = arr.filter(item => item % 2 !== 0).sort((a, b) => a - b)
//     // let count = -1
//     // return arr.map(item => {
//     //     if (item % 2 !== 0) {
//     //         count += 1
//     //         return odds[count]
//     //     } else return item
//     // })

//     // Using shift method (best way)
//     return arr.map(i => i % 2 ? odds.shift() : i)
// }


// console.log(sortOddNumber([1, 11, 2, 8, 3, 4, 5]));


// ***************** ex5
// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// const camelCase = string => {
//     return [...string].map((item, idx) => {
//         return idx === 0
//             ? item
//             : item === item.toUpperCase() ? ` ${item}` : item
//     }).join("")
// }

// console.log(camelCase('TuanNguyen'));


// ********** ex6
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

// function moveZeros(arr) {
//     let res = [], zeroArr = []
//     arr.map(item => item === 0 ? zeroArr.push(item) : res.push(item))
//     return [...res, ...zeroArr]
//     // using concat
//     // return res.concat(zeroArr)
//     // using rest and filter
//     // return [
//     //     ...arr.filter(c => c !== 0),
//     //     ...arr.filter(c => c === 0)
//     // ]
// }

// console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));

// console.log('5' + 3);
// console.log(typeof ('5' + 3));


// *************** ex7
// Longest subarray
// Given an array of integers, what is the length of the longest subarray containing no more than two distinct values such that the distinct values differ by no more than 1?
// arr = [0,1,2,1,2,3]
// the largest sub-arr length = 4: [1,2,1,2]

function longestSubArray(arr) {
    if (arr.length <= 2) {
        return arr.length
    }
    let leftSide = 0, rightSide = 0, maxLength = 0
    while (rightSide < arr.length) {
        if (Math.abs(Math.max(...arr.slice(leftSide, rightSide + 1)) - Math.min(...arr.slice(leftSide, rightSide + 1))) <= 1) {
            maxLength = Math.max(maxLength, rightSide - leftSide + 1)
            rightSide++
        } else leftSide++
    }
    return maxLength
}
console.log(longestSubArray([0, 1, 2, 1, 2, 3]));
