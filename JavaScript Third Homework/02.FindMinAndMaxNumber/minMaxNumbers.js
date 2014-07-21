var minCount = 100000;
var maxCount = 0;
var i;

function findMinAndMax(value) {
    for (i in value) {
        if (value[i] > maxCount) {
            maxCount = value[i];
        }
        else if (value[i] < minCount) {
            minCount = value[i];
        }
    }
    console.log('Min -> ' + minCount);
    console.log('Max -> ' + maxCount);
}


findMinAndMax([2, 2, 2, 2, 2]);
findMinAndMax([1, 2, 1, 15, 20, 5, 7, 31]);
findMinAndMax([500, 1, -23, 0, -300, 28, 35, 12]);