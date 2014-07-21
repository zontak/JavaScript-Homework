function divisionBy3(value) {
    var number = value;
    var counter = 0;
    sNumber = number.toString();

    for (var i = 0 ; i < sNumber.length; i += 1) {
        counter += sNumber.charAt(i)
    }

    if (counter % 3 == 0) return console.log('the number is divided by 3 without remainder');
    else if (counter % 3 != 0) return console.log('the number is not divided by 3 without remainder');
}

divisionBy3(12);
divisionBy3(189);
divisionBy3(591);