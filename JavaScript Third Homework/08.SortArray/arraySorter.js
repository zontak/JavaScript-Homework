
var a = [12, 12, 50, 2, 6, 22, 51, 712, 6, 3, 3];
function bubbleSort(a) {
    var swapped;
    do {
        swapped = false;
        for (var i = 0; i < a.length - 1; i++) {
            if (a[i] > a[i + 1]) {
                var temp = a[i];
                a[i] = a[i + 1];
                a[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    console.log(a);
}

bubbleSort(a);