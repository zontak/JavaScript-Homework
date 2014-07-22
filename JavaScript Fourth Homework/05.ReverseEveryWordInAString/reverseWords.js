reverseWordsInString('Hello, how are you.');
reverseWordsInString('Life is pretty good, isn’t it?');

function reverseWordsInString(str) {
    var split = str.split(' ');
    var result = '';
    for (var i = 0; i < split.length; i++) {
        var word = ' ' + split[i];
        for (var k = word.length - 1; k >= 0; k--) {
            result += word[k];
        }
    }
    return console.log(result);
}