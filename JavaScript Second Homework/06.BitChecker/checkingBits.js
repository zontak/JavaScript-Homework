function bitChecker(value) {
    if (((value >> 3) & 1) == 1) {
        return console.log(true);
    }
    else return console.log(false);
}

bitChecker(333);
bitChecker(425);
bitChecker(2567564754);