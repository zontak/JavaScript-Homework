findNthDigit([1, 6]);
findNthDigit([2, -55]);
findNthDigit([6, 923456]);
findNthDigit([3, 1451.78]);
findNthDigit([6, 888.88]);

function findNthDigit(arr) {
    var result;
    var pattern = /\d+/g;
    var first = arr[0];
    var number = arr[1];
    var numberStr = number.toString().split('').reverse().join('');
    var regex;
    result = '';
    while (regex = pattern.exec(numberStr)) {
        result += regex[0];
    }
    if (first > result.length) {
        console.log('The number doesn’t have ' + first + ' digits');
    }
    return console.log(result[first - 1]);
}