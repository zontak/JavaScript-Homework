console.log(replaceSpaces('But you were living in another world tryin\'to get your message through'));

function replaceSpaces(value) {
    var text = value.split(' ');
    var result;
     for (var i = 0; i < text.length; i++) {
         result += text[i] + '&nbsp;';
     }
     return result;
}