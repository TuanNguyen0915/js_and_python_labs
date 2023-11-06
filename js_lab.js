// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {
    const punctuation = ['!', ',', '.','?']
    let newArr = str.split(" ")
    return newArr.map(item => {
        if (item.length === 1 ){
            if (punctuation.includes(item)) return item
            else return item + 'ay'
        } else {
            let newI = item.slice(1) + item[0] + 'ay'
            return newI
        }
    }).join(" ")
}

console.log(pigIt("Hello world o ? !"));
