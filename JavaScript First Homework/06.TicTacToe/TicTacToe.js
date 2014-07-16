(function () {

    var array = new Array();
    var playerXTurn = true;
    var message = document.getElementById("player");
    message.innerHTML = "Player with X is on turn...!";

    var board = document.getElementById("board");
    board.addEventListener("click", engine);

    function engine(event) {
        if (event.target.className == "field") {
            if (array[event.target.id] == undefined) {
                if (playerXTurn) {
                    array[event.target.id] = "x";
                    event.target.innerHTML = "x";
                    playerXTurn = false;
                    message.innerHTML = "Player with O is on turn...!";
                } else {
                    array[event.target.id] = "o";
                    event.target.innerHTML = "o";
                    playerXTurn = true;
                    message.innerHTML = "Player with X is on turn...!";
                }
                if (!isGameContinue()) {
                    board.removeEventListener("click", engine);
                }
            } else {
                alert("This field is not free")
            }
        }
    }

    function isGameContinue() {
        for (var i = 1; i <= 7; i += 3) {
            if ((array[i] == array[i + 1] && array[i] == array[i + 2]) &&
                (array[i] == "x" || array[i] == "o")) {
                alert("Player " + array[i] + " Win");
                makeLineGreen(i, i+1, i+2);
                return false;
            }
        }

        for (var i = 1; i <= 3; i += 1) {
            if ((array[i] == array[i + 3] && array[i] == array[i + 6]) &&
                (array[i] == "x" || array[i] == "o")) {
                alert("Player " + array[i] + " Win");
                makeLineGreen(i, i+3, i+6);
                return false;
            }
        }

        if ((array[1] == array[5] && array[1] == array[9]) && (array[1] == "x" || array[1] == "o")) {
            alert("Player " + array[1] + " Win");
            makeLineGreen(1, 5, 9);
            return false;
        }
        if ((array[3] == array[5] && array[3] == array[7]) && (array[3] == "x" || array[3] == "o")) {
            alert("Player " + array[3] + " Win");
            makeLineGreen(3, 5, 7);
            return false;
        }
        return true;
    }

    function makeLineGreen(fieldOne, fieldTwo, fieldThree) {
        makeFieldGreen(fieldOne);
        makeFieldGreen(fieldTwo);
        makeFieldGreen(fieldThree);
    }

    function makeFieldGreen(id) {
        document.getElementById(id).style.color = "green";
    }
}());