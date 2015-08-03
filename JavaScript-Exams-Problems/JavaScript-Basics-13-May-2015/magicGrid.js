/**
 * Created by Daniela on 13/05/2015.
 */

function magicGrid(input){
    var word = input[0];
    var magicNumber = Number(input[1]);
    var matrix = [];
    for (var i = 2; i < input.length; i++) {
        var line = input[i].split(/\s+/g);
        matrix.push(line);
    }
    //console.log(matrix);
    for (var k = 0; k < matrix.length; k++) {
        for (var j = 0; j < matrix[k].length; j++) {
            for (var m = 0; m < matrix.length; m++) {
                for (var n = 0; n < matrix[m].length; n++) {
                    if(k != m && j != n){
                        var sum = Number(matrix[k][j]) + Number(matrix[m][n]);
                        if(sum == magicNumber){
                            var row1 = k;
                            var col1 = j;
                            var row2 = m;
                            var col2 = n;
                            break;
                        }
                    }

                }

            }

        }
    }
    //console.log(row1);
    //console.log(row2);
    //console.log(col1);
    //console.log(col2);

    var number = row1 + col1 + row2 + col2;
    var outputWord = '';
    for (var s = 0; s < word.length; s++) {
        if(s % 2 == 0){
            var newLetterCode = word.charCodeAt(s) + number;
            var newLetter = String.fromCharCode(newLetterCode);
        } else {
            var newLetterCode = word.charCodeAt(s) - number;
            var newLetter = String.fromCharCode(newLetterCode);
        }
        outputWord += newLetter;
    }
    console.log(outputWord);
}


magicGrid(['QqdvSpg',
            '400',
            '100 200 120',
            '120 300 310',
            '150 290 370']);