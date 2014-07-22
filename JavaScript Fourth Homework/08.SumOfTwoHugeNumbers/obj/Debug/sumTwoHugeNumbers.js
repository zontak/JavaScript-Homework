/// <reference path="bignumber.min.js" />
sumTwoHugeNumbers(['155', '65']);
//sumTwoHugeNumbers(['123456789', '123456789']);
//sumTwoHugeNumbers(['887987345974539', '4582796427862587']);
//sumTwoHugeNumbers(['347135713985789531798031509832579382573195807',
//                   '817651358763158761358796358971685973163314321']);

var BigNumber=require("bignumber.min.js");

function sumTwoHugeNumbers(value) {
    
    var first = new BigNumber(20);
    //var second = new BigNumber(value[1]);

    console.log(first.plus(second));

}