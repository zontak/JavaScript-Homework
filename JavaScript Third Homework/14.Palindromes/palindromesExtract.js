findPalindromes('There is a man, his name was Bob.');

function findPalindromes(value) {
    value = value.toLowerCase();
    var words = value.split(/\W+/);
    var a = [];
    for (var i = 0; i < words.length - 1; i++) {
        if (words[i] === words[i].split('').reverse().join('')) {
            a.push(words[i]);
        }
    }
    return console.log(a);
}