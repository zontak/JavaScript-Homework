cardFriquency('8♥ 2♣ 4♦ 10♦ J♥ A♠ K♦ 10♥ K♠ K♦');
cardFriquency('J♥ 2♣ 2♦ 2♥ 2♦ 2♠ 2♦ J♥ 2♠');
cardFriquency('10♣ 10♥');

function cardFriquency(string) {    
    var numbers = string.split(/\W+/);
    var array = [];
    var counter = 0;
    for (var i = 0; i < numbers.length -1; i++) {
        var flag = false;
        for (var m = 0; m < array.length; m++) {
            if (numbers[i] == array[m][0]) {
                flag = true;
                array[m][1]++;
            }
        }
        if (flag == false) {
            array[counter] = [];
            array[counter][0] = numbers[i];
            array[counter][1] = 1;
            counter++;
        }
    }
    for (var i = 0; i < array.length; i++) {
        var percent = (array[i][1] * ((numbers.length - 1) / 100) *100).toFixed(2);
        console.log(array[i][0] + ' -> ' + percent + '%');
    }
}