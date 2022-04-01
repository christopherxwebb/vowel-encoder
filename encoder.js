const encode = (s) => {
    const vowels  = [
        ["a", 1],
        ["e", 2],
        ["i", 3],
        ["o", 4],
        ["u", 5]
    ]
    
    const arrayOfString = s.split("");
    const newArrayOfString = arrayOfString.map((letter) => {
        for (let i in vowels) {
            if (letter === vowels[i][0]) {
                letter = vowels[i][1]
            }
        }
        return letter
    })
    return newArrayOfString.join("");
}

module.exports = encode;


