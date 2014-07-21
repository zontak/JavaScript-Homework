function printNumbers(n) {
    var a = '';
    for (var i = 0; i <= n; i++) {
        if (n == 1 || n == 2 || n == 3) {
            console.log('no');
            break;
        }
        if (i % 4 == 0 || i % 5 == 0) continue;
        a = a + i + ' ';
    }
    console.log(a);
}

printNumbers(20);
printNumbers(1);
printNumbers(13);
