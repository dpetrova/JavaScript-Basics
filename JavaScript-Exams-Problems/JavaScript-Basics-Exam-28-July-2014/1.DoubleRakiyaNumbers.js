/**
 * Created by urukhai on 3/23/15.
 */
function DoubleRakiyaNumbers(input){
    var start = Number(input[0]); //also is possible parseInt(input[0])
    var end = Number(input[1]);

    console.log('<ul>');
    for (var i = start; i <= end; i++) {
        if(isRakiaNumber(i)){
            console.log('<li>' +
                            '<span class=\'rakiya\'>' + i + '</span>' +  //самите кавички вътре в стринга се искейпват с \
                            '<a href="view.php?id=' + i + '\">View</a>' +
                        '</li>');
        } else {
            console.log('<li>' +
                            '<span class=\'num\'>' + i + '</span>' +
                        '</li>');
        }
    }
    console.log('</ul>');

    function isRakiaNumber(number){
        //regular expression says:
        //create capturing group (#1) for extracting a substring: (\d{2}); it is group of 2 digits
        //after group could be 0 or more digits: \d*
        //backreference: matches the result of capture group #1: \1
        //global search (not stop when find match but search all string for more matches): g
        var pattern = /(\d{2})\d*\1/g;
        //in JS the condition in if() may be just a variable;
        //when this variable is null/undefined/empty string""/0/false --> all of these mean FALSE
        //and when has value --> mean TRUE
        if(number.toString().match(pattern)){
            return true;
        }
        return false;
    }
}

DoubleRakiyaNumbers(['11210', '11215']);