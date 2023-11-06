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
function duplicateCount(text) {
    let newArr = text.toLowerCase().split("")
    let count = 0
    let newObj = newArr.reduce((prev, char) => {
        if (prev[char]) {
            prev[char] += 1
        }
        else prev[char] = 1
        return prev
    }, {})
    Object.keys(newObj).forEach(key => {
        if (newObj[key] > 1) {
            count += 1
        }
    }
    )
    return count
}
