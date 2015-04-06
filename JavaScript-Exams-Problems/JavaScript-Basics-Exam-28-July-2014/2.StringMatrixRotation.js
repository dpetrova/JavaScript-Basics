/**
 * Created by urukhai on 3/23/15.
 */
function StringMatrixRotation(input) {
    var pattern = /\d+/; //matches digits
    var degreesAsString = input[0].match(pattern); //it will return an array with matches
    var degrees = Number(degreesAsString[0]);
    var numberOfRotations = (degrees % 360)/90;
    var matrix = [];

    matrix = loadMatrix(input);

    for (var i = 0; i < numberOfRotations; i++) {
        matrix = rotate90degrees(matrix);
    }

    printMatrix(matrix);

    function loadMatrix(input){
        var maxLength = 0;
        // Create the matrix of chars
        for (var i = 1; i < input.length; i++) {
            var line = input[i];
            matrix.push(line.split(''));
            if (line.length > maxLength) {
                maxLength = line.length;
            }
        }
        //Pad the shorter lines with spaces at the end
        for (var i = 0; i < matrix.length; i++) {
            while (matrix[i].length < maxLength) {
                matrix[i].push(' ');
            }
        }
        return matrix;
    }

    function rotate90degrees(matrix) {
        var maxRow = matrix.length - 1;
        var maxCol = matrix[0].length - 1;
        var result = new Array(maxCol);
        for (var col = 0; col <= maxCol; col++) {
            result[col] = new Array(maxRow);
            for (var row = 0; row <= maxRow; row++) {
                result[col][maxRow - row] = matrix[row][col];
            }
        }
        return result;
    }

    function printMatrix(matrix){
        for (var i = 0; i < matrix.length; i++) {
            var line = matrix[i].join('');
            console.log(line);
        }
    }
}

StringMatrixRotation(  ['Rotate(90)',
                        'hello',
                        'softuni',
                        'exam']
);