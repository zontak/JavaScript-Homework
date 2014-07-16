var d = new Date();
var h = d.getHours();
var m = d.getMinutes();
if (m < 10) {
    console.log(h + ":0" + m);
}
else {
    console.log(h + ":" + m);
}

setTimeout(function () {
}, 1005000);

