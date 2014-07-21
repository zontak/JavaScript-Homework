cardFriquency('8♥ 2♣ 4♦ 10♦ J♥ A♠ K♦ 10♥ K♠ K♦');
console.log('\n');
cardFriquency('J♥ 2♣ 2♦ 2♥ 2♦ 2♠ 2♦ J♥ 2♠');
console.log('\n');
cardFriquency('10♣ 10♥');
function cardFriquency(string) {
    var cardsWithFace = string.split(' ');
    var cardsWithowtFace = [];
    var handLength = cardsWithFace.length;
    for (var i = 0; i < handLength; i++) {
        cardsWithowtFace[i] = smashTheFace(cardsWithFace[i]);
    }
    return collectFriquency(cardsWithowtFace, handLength);
}
function smashTheFace(card) {
    if (card[0] == 1) {
        card = card.substring(0, 2);
    }
    else {
        card = card.substring(0, 1);
    }
    return card.toLowerCase();
}
function collectFriquency(arr, length) {
    var friquencyArr = [];
    for (var j = 0; j < length; j++) {
        if (friquencyArr[arr[j]] == undefined) {
            friquencyArr[arr[j]] = 1;
        }
        else {
            friquencyArr[arr[j]] += 1;
        }
    }
    return mathFriquency(friquencyArr, length, arr);
}
function mathFriquency(arr, length, realArr) {
    for (var index in arr) {
        arr[index] = (arr[index] / length) * 100;
        arr[index] = arr[index].toFixed(2) + '%';
    }
    return orderAndOutPut(arr, realArr);
}
function orderAndOutPut(unorderedArr, realArr) {
    for (var i in realArr) {
        for (var j in unorderedArr) {
            if (realArr[i] == j && unorderedArr[j] != undefined) {
                console.log(j.toUpperCase() + ' -> ' + unorderedArr[j]);
                unorderedArr[j] = undefined;
            }
        }
    }
}