findMaxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
findMaxSequence(['happy']);
findMaxSequence([2, 'qwe', 'qwe', 3, 3, '3']);

function findMaxSequence(arr) {

    if (arr.length == 1) {
        return console.log('[' + arr[0] + ']')
    }

    var currentCount = 1;
    var currentElement = "";
    var lastCount = 0;
    var result = [];

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            currentCount++;
        } else {
            currentCount = 0;
        }

        if (lastCount <= currentCount) {
            lastCount = currentCount;
            currentElement = arr[i];
        }
    }

    for (var i = 0; i <= lastCount; i++) {
        result += currentElement;
    }


    return console.log('[' + result + ']');
}


