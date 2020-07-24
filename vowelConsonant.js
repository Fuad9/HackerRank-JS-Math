// Javascript code to show vowels and consonants each in new line from a given string

function vowelsAndConsonants(s) {
    for (var i = 0; i < s.length; i++) {
        let current_char = s[i];
        if ('aeiou'.includes(current_char)) {
            console.log(current_char);
        }
    }


    let j = 0;
    while (j < s.length) {
        let current_char = s[j];
        if (!'aeiou'.includes(current_char)) {
            console.log(current_char);
        }
        j++;
    }
}
var result = vowelsAndConsonants("education");
result = vowelsAndConsonants("water")
console.log(result);