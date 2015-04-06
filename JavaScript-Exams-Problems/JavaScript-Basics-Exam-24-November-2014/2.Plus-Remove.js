/**
 * Created by urukhai on 3/29/15.
 */
function solve(input){
    var matrix = [];
    var resultMatrix = [];
    input.forEach(function(string) {
        matrix.push(string.toLowerCase().split(''));
        resultMatrix.push(string.split(''));
    });


    for (var row = 0; row < input.length-2; row++) {
        for (var col = 1; col < input[row].length; col++) {
            var char = matrix[row][col];
            var isX = matrix[row+1][col-1] == char && matrix[row+1][col] == char &&
                            matrix[row+1][col+1] == char && matrix[row+2][col] == char;
            if(isX) {
                resultMatrix[row][col] = '';
                resultMatrix[row+1][col-1] = '';
                resultMatrix[row+1][col] = '';
                resultMatrix[row+1][col+1] = '';
                resultMatrix[row+2][col] = '';
            }
        }
    }

    for (var row in resultMatrix) {
        console.log(resultMatrix[row].join(''));
    }
}

solve( ['ab**l5',
        'bBb*555',
        'absh*5',
        'ttHHH',
        'ttth'
        ]
);

console.log();
solve( ['888**t*',
        '8888ttt',
        '888ttt<<',
        '*8*0t>>hi'
    ]
);

console.log();
solve( ['@s@a@p@una',
        'p@@@@@@@@dna',
        '@6@t@*@*ego',
        'vdig*****ne6',
        'li??^*^*'
    ]
);
