(function () {

    var button = document.getElementById("button");

    button.addEventListener("click", function () {
        var input = document.getElementById("input").value;
        document.getElementById("result").innerHTML = getArea(input);
    });

    function getArea(r) {
        var result = Math.PI * r * r;
        return result;
    };

}());