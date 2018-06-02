const pigLatin = word => {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    if (vowels.includes(word[0])) {
        return `${word}way`
    } else {
        let firstVowel = null;
        let marker = 0;
        while (!firstVowel && marker <= word.length){
            if (vowels.includes(word[marker])) firstVowel = marker;
            marker++
        }
        return `${word.substring(firstVowel)}${word.slice(0, firstVowel)}ay`
        
    }
}

module.exports = pigLatin