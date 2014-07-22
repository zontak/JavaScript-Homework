lastDigitAsText(6);
lastDigitAsText(-55);
lastDigitAsText(133);
lastDigitAsText(14567);

function lastDigitAsText(number) {
    var num = number + '';
    var last = num[num.length - 1];
    return numbersOnEnglish(last);
}

function numbersOnEnglish(num) {
    switch (num) {
        case '1': return console.log('one'); break;
        case '2': return console.log('two'); break;
        case '3': return console.log('three'); break;
        case '4': return console.log('four'); break;
        case '5': return console.log('five'); break;
        case '6': return console.log('six'); break;
        case '7': return console.log('seven'); break;
        case '8': return console.log('eight'); break;
        case '9': return console.log('nine'); break;
    }

}