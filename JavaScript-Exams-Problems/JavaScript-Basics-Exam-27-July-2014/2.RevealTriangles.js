/**
 * Created by urukhai on 3/19/15.
 */
//Hint: to simplify your work, you can reveal only triangles of size "2 lines",
// because all bigger triangles consist of several overlapping triangles of size "2 lines".
function revealTriangles(input) {
    // Initialize the output as char[][], holding the input chars
    var output = [];
    for (var i in input) {
        output[i] = input[i].split('');
    }

    // Replace all triangles with '*' (with overlapping)
    for (var i = 0; i < input.length - 1; i++) {
        for (var j = 1; j < input[i].length; j++) {
            var a = input[i][j];
            var b = input[i + 1][j - 1];
            var c = input[i + 1][j];
            var d = input[i + 1][j + 1];
            if(a === b && b === c && c === d){
                output[i][j] = '*';
                output[i + 1][j - 1] = '*';
                output[i + 1][j] = '*';
                output[i + 1][j + 1] = '*';
            }
        }
    }

    for (var i in output) {
        console.log(output[i].join(''));
    }

}


revealTriangles(['dffdsgyefg',
                'ffffeyeee',
                'jbfffays',
                'dagfffdsss',
                'dfdfa',
                'dadaaadddf',
                'sdaaaaa',
                'daaaaaaasf'
             ]
);