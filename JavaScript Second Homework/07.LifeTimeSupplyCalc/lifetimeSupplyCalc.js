function calcSupply(age, maxage, amount, food) {
    var calc = ((maxage - age) * 365) * amount;
    var ages = maxage - age;
    var kg = (ages * 365) * amount;
    return console.log(kg + ' of ' + food + ' would be enough until I am ' + maxage + ' ages old ');
}

calcSupply(38, 118, 0.5,'Chocolate');
calcSupply(20, 87, 2, 'Fruits');
calcSupply(16, 102, 1.1, 'Nuts');