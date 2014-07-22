countDivs('<!DOCTYPE html>' +
            '<html>' +
            '<head lang="en">' +
                '<meta charset="UTF-8">' +
                    '<title>index</title>' +
                    '<script src="/yourScript.js" defer></script>' +
                '</head>' +
                '<body>' +
                    '<div id="outerDiv">' +
                        '<div' +
                        'class="first">' +
                            '<div><div>hello</div></div>' +
                        '</div>' +
                        '<div>hi<div></div></div>' +
                        '<div>I am a div</div>' +
                    '</div>' +
                '</body>' +
            '</html>');

function countDivs(html) {
    var divs = html.split('');
    var counter = 0;
    for (var i = 3; i < divs.length; i++) {
        if (divs[i - 3] == '<' && 
            divs[i - 2] == 'd' &&
            divs[i - 1] == 'i' &&
            divs[i] == 'v') {
            counter++;
        }
    }
    return console.log(counter);
}