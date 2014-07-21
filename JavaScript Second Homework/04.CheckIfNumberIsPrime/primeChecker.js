function isPrime(value) {
    var prime = Math.floor(Math.sqrt(value));
    if (value == 1)  return console.log(false);
    if (value == 2) return console.log(true);

    for (var i = 2; i <= prime; ++i)  {
        if (value % i == 0)  return console.log(false);
    }
    return console.log(true);     
}

isPrime(7);
isPrime(254);
isPrime(587);