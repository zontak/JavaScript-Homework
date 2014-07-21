console.log(reverseString("java script"));
console.log(reverseString("softuni"));
console.log(reverseString("sample"));

function reverseString(str) {
    return str.split('').reverse().join('');
}

