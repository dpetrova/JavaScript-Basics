/**
 * Created by urukhai on 4/3/15.
 */
function solve(input){

    // Initialize the output as char[][], holding the input chars
    var inputAsChar = [];
    var output = [];
    for (var i in input) {
        output[i] = input[i].split('');
        inputAsChar[i] = input[i].toLowerCase().split('');
    }

    // Remove all X-shape (with overlapping)
    for (var i = 0; i < inputAsChar.length - 2; i++) {
        for (var j = 0; j < inputAsChar[i].length - 2; j++) {
            var a = inputAsChar[i][j];
            var b = inputAsChar[i][j + 2];
            var c = inputAsChar[i + 1][j + 1];
            var d = inputAsChar[i + 2][j];
            var e = inputAsChar[i + 2][j + 2];
            if (a == b && b == c && c == d && d == e) {
                delete(output[i][j]);
                delete(output[i][j + 2]);
                delete(output[i + 1][j + 1]);
                delete(output[i + 2][j]);
                delete(output[i + 2][j + 2]);
            }
        }
    }

    //print the result
    for (var i in output) {
        console.log(output[i].join(''));
    }

}


solve( ['puoUdai',
        'miU',
        'ausupirina',
        '8n8i8',
        'm8o8a',
        '8l8o860',
        'M8i8',
        '8e8!8?!'
        ]
);