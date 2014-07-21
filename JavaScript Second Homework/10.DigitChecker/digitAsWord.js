function checkDigit(value) {
    var number = value;
    var sNumber = number.toString();
    var arr = new Array();
    var len = sNumber.length;

    for (var i = 0; i < len; i++) {
        arr.push(sNumber.charAt(i));
    }
    arr.reverse();

    if (arr[2] == 3) return console.log(true);
    else if (arr[2] != 3) return console.log(false);
}

checkDigit(1235);
checkDigit(25368);
checkDigit(123456);

