//random string functions
'use strict';


function rotate(string, amount) {
    let len = string.length,
        result = '';

    //these make sure it moves left if amount is negative, moves right if positive
    if (amount < 0) amount *= -1;
    else if (amount > 0) amount = len - amount % len;

    let start = amount % len, 
        index = start;
    
    do {
        result += string[index];
        index = (index + 1) % len;
    } while (index !== start);

    return result;
}


function makePalindrome(string) {
    if (checkPalindrome(string)) return string;

    return string + string.split('').reverse().join('');
}


function checkPalindrome(string) {
    string = simplify(string); //palindromes typically count only the letters, ie 'race car'
    return string === string.split('').reverse().join('');
}

//removes all spaces, punctuation, and turns all letters to lowercase
function simplify(string) {
    string = string.split('');
    string = string.map(function(letter) {
        if (letter.match(/[a-zA-Z]/)) return letter.toLowerCase();
        return '';
    });
    return string.join('');
}


function hackerAlternate(string) {
    string = string.split('');
    string = string.map(function(letter, index) {
        if (index % 2 === 0) return letter.toUpperCase();
        return letter;
    });
    return string.join('');
}

function hackerVowels(string) {
    string = string.split('');
    string = string.map(function(letter) {
        if (letter.match(/[aeiou]/)) return letter;
        return letter.toUpperCase();
    });
    return string.join('');
}








module.exports = {rotate, makePalindrome, checkPalindrome, hackerAlternate, hackerVowels, simplify}

