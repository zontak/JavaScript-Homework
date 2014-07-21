function compareChars(valueOne, valueTwo) {

    if (valueOne.length != valueTwo.length) return console.log('Not Equal');

    for (var i = 0; i < valueOne.length; i++) {
        if (valueOne[i] == valueTwo[i]) return console.log('Equal');
        if (valueOne[i] != valueTwo[i]) return console.log('Not Equal');
    }
}

compareChars(
    ['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q'],
    ['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q']);

compareChars(
    ['3', '5', 'g', 'd'],
    ['5', '3', 'g', 'd']);

compareChars(
    ['q', 'g', 'q', 'h', 'a', 'k', 'u', '8', '}', 'q', '.', 'h', '|', ';'],
    ['6', 'f', 'w', 'q', ':', '”', 'd', '}', ']', 's', 'r']);
