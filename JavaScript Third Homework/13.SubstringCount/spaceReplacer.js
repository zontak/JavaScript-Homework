replaceSpaces(['in', 'We are living in a yellow submarine. We don\'t have anything else. Inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.']);
replaceSpaces(['your', 'No one heard a single word you said. They should have seen it in your eyes. What was going around your head.']);
replaceSpaces(['but', 'But you were living in another world tryin\' to get your message through.']);

function replaceSpaces(arr) {
    var fullLength = arr[1].length;
    var partLength = arr[0].length;
    var match = arr[0];
    var value = arr[1];
    var counter = 0;
    for (var i = 0; i < fullLength; i++) {
        if (value.substr(i, partLength).toLowerCase() == match.toLowerCase()) {
            counter++;
        }
    }
    return console.log(counter);
}