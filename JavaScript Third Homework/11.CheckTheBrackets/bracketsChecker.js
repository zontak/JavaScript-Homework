function checkBrackets(value) {
    var leftBracket = '(';
    var rightBrackets = ')';
    var left = [];
    var right = [];
    for (var i = 0; i < value.length; i++) {
        if (value[i] == leftBracket) {
            left.push(value[i]);
        }
        else if (value[i] == rightBrackets) {
            right.push(value[i]);
        }
    }
    if (right.length == left.length) {
        console.log('correct');
    }
    else console.log('incorrect');
}

checkBrackets('( ( a + b ) / 5 – d )');
checkBrackets(') ( a + b ) )');
checkBrackets('( b * ( c + d *2 / ( 2 + ( 12 – c / ( a + 3 ) ) ) )');