console.log(friquentWord('in the middle of the night'));
console.log('\n');
console.log(friquentWord('Welcome to SoftUni. Welcome to Java. Welcome everyone.'));
console.log('\n');
console.log(friquentWord('Hello my friend, hello my darling. Come on, come here. Welcome, welcome darling.'));
function friquentWord(string) {
    var words = string.split(' ');
    var wordsCount = words.length;
    var wordsArr = [];
    for (var i = 0; i < wordsCount; i++) {
        var result = popComma(words[i]);
        if (wordsArr[result] == undefined) {
            wordsArr[result] = 1;
        }
        else {
            wordsArr[result] += 1;
        }
    }
    return whichAreTheMost(wordsArr);
}
function popComma(word) {
    var alphabetic = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var bool = true;
    var lastSymbol = word[word.length - 1];
    for (var j = 0; j < alphabetic.length; j++) {
        if (lastSymbol != alphabetic[j]) {
            bool = false;
        }
        else {
            return word.toLowerCase();
        }
    }
    if (bool == false) {
        word = word.substr(0, word.length - 1);
        return word.toLowerCase();
    }
}
function whichAreTheMost(arr) {
    var result = '';
    var counter = 0;
    for (var index in arr) {
        var dinamicCounter = arr[index];
        if (dinamicCounter > counter) {
            counter = dinamicCounter;
            result = index + ' -> ' + arr[index];
        }
        else if (dinamicCounter == counter && result != '') {
            result += '\n' + index + ' -> ' + arr[index];
        }
    }
    return result;
}