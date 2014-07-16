(function () {
    var ctx = document.getElementById("field").getContext("2d");
    var x = 150;
    var y = 142;
    var dx = 1;
    var dy = 1;
    var radius = 6;

    document.body.onkeydown = function (e) {
        if (e.keyCode == 37) {
            x -= 1;
            if (x < 0) {
                x = 0;
            }
        }
        if (e.keyCode == 39) {
            x += 1;
            if (x > 300) {
                x = 300;
            }
        }
    }


    var arr = new Array();
    var count = 0;
    function drowFrame() {
        if (count == 20) {
            var rect = [0, getRandomInt(0, 280)];
            arr.push(rect);
            count = 0;
        }
        count++;
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.beginPath();
        for (var i = 0; i < arr.length ; i++) {
            console.log(arr[i]);
            ctx.rect(arr[i][1], arr[i][0], 10, 5);
            arr[i][0]++;
            if (arr[i][0] == 650) {
                arr.pop(i);
                i--;
            }
            ctx.stroke();
        }
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
        ctx.stroke();
        setTimeout(drowFrame, 100);
    }

    drowFrame();

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

}());