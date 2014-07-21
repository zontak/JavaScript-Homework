function firstFunction(){
    var button = document.getElementById('button');
    var field = document.getElementById('input');

    button.addEventListener('click', function () {
        calc(field.value);
    });
}

function calc(value) {
    var resultche = eval(value);
    var result = document.getElementById('result');
    result.innerHTML = resultche;
}