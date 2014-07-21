var array = [];
var count = 0;
for (var i in document) {
    array[count] += i;
    count++;
}
array.sort();
for (var i in array) {
    console.log(i);
}
