function calcCylinderVol(radius , height) {
    var result = (Math.PI * (radius * 2) * height).toFixed(3);
    return console.log(result);
}

calcCylinderVol(2, 4);
calcCylinderVol(5, 8);
calcCylinderVol(12, 3);