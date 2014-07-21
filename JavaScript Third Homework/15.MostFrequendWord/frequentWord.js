friquentWord('in the middle of the night');
friquentWord('Welcome to SoftUni. Welcome to Java. Welcome everyone.');
friquentWord('Hello my friend, hello my darling. Come on, come here. Welcome, welcome darling.');
function friquentWord(arr) {
    arr = arr.toLowerCase();
    var words = arr.split(/\W+/);
    var occurances = [];
    var index = 0;
    for (var m = 0; m < words.length; m++) {
        var flag = false;
        for (var i = 0; i < occurances.length; i++) {
            if (words[m] == occurances[i][0]) {
                occurances[i][1]++;
                flag = true;
                break;
            }
        }
        if (!flag) {
            occurances[index] = [];
            occurances[index][0] = words[m];
            occurances[index][1] = 1;
            index++;
        }
    }
    var mostFrequend = 0;
    for (var j = 0; j < occurances.length; j++) {
        if (mostFrequend < occurances[j][1]) {
            mostFrequend = occurances[j][1];
        }
    }
    for (var i = 0; i < occurances.length; i++) {
        if (mostFrequend == occurances[i][1]) {
            console.log(occurances[i][0] + ' -> ' + occurances[i][1] + ' times' );
        }
    }
}