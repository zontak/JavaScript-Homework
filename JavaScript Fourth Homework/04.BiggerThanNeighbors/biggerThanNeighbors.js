biggerThanNeighbors(2, [1, 2, 3, 3, 5]);
biggerThanNeighbors(2, [1, 2, 5, 3, 4]);
biggerThanNeighbors(5, [1, 2, 5, 3, 4]);
biggerThanNeighbors(0, [1, 2, 5, 3, 4]);

function biggerThanNeighbors(index, arr) {
    if (index >= arr.length) {
        return console.log('invalid index');
    }
    else if (index == 0 || index == arr.length) {
        return console.log('only one neighbor');
    }
    else if (arr[index] <= arr[index + 1] || arr[index] <= arr[index - 1]) {
        return console.log('not bigger');
    }
    else if (arr[index] > arr[index + 1] || arr[index] > arr[index - 1]) {
        return console.log('bigger');
    }
}