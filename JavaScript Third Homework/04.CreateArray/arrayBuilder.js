createArray(new Array(20));

function createArray(value) {
    var a = '';
    for (var k = 0; k <= 20; k++) {
        value[k] = k * 5;
        a = a + value[k] + ' ';
    }
    console.log('[' + a + ']');
}
