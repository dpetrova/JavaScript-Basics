/**
 * Created by urukhai on 3/21/15.
 */
function solve (input) {
    var figures = {"I":0,"L":0,"J":0,"O":0,"Z":0,"S":0,"T":0}; //създаваме асоциативен масив, където ще пазим коя фигура сме намерили и броят им
    var keys = Object.keys(figures); //това ще даде масив с ключовете [ 'I', 'L', 'J', 'O', 'Z', 'S', 'T' ]

    //ще обхождаме input матрицата с 2 вложени цикъла: първият обхожда редовете, а вторият елементите на всеки един ред
    for (var i = 0; i < input.length; i++) {
        for (var j = 0; j < input[i].length; j++) {
            if (input[i][j] == 'o') {
                checkFigures(i, j); //тук аргументите са съответно позицията по ред, и позицията по колона
            }
        }
    }

    function checkFigures(row, col) {
        checkElement('I', row, col, 1, 0, 2, 0, 3, 0);
        checkElement('L', row, col, 1, 0, 2, 0, 2, 1);
        checkElement('J', row, col, 1, 0, 2, 0, 2, -1);
        checkElement('O', row, col, 0, 1, 1, 0, 1, 1);
        checkElement('Z', row, col, 0, 1, 1, 1, 1, 2);
        checkElement('S', row, col, 0, -1, 1, -1, 1, -2);
        checkElement('T', row, col, 0, 1, 0, 2, 1, 1);
    }

    function checkElement(elem, row, col,
                      firstRowCheck, firstColCheck,
                      secondRowCheck, secondColCheck,
                      thirdRowCheck, thirdColCheck){
        var maxRow = Math.max(firstRowCheck, secondRowCheck, thirdRowCheck);
        var maxCol = Math.max(firstColCheck, secondColCheck, thirdColCheck);
        var minCol = Math.min(firstColCheck, secondColCheck, thirdColCheck);
        if(input[row + maxRow] == undefined ||
            input[row][col+maxCol] == undefined ||
            input[row][col+minCol] == undefined) {//правим проверка дали сме излезли от матрицата, т.е ако имаме масив с 3 елемента  arr=[1,2,3] и му поискаме четвърти например arr[3] това ще върне undefined
            return false;
        }
        if(input[row][col] == input[row + firstRowCheck][col + firstColCheck] &&
            input[row][col] == input[row + secondRowCheck][col + secondColCheck] &&
            input[row][col] == input[row + thirdRowCheck][col + thirdColCheck]){
            figures[elem]++;
        }
    }

    console.log(JSON.stringify(figures));
}

//function checkFigures(elem, row, col) {
//    switch (elem) {
//        case 'I':
//            if(input[row+3] == undefined || input[row+3][col+0] == undefined) {//правим проверка дали сме излезли от матрицата, т.е ако имаме масив с 3 елемента  arr=[1,2,3] и му поискаме четвърти например arr[3] това ще върне undefined
//                return false;
//            }
//                if(input[row][col] == input[row+1][col] &&
//                input[row][col] == input[row+2][col] &&
//                input[row][col] == input[row+3][col]  && input[row][col] == 'o'){
//                figures['I']++;
//            }
//            break;
//        case 'L':
//            if(input[row+2] == undefined || input[row+2][col+1] == undefined) {//правим проверка дали сме излезли от матрицата, т.е ако имаме масив с 3 елемента  arr=[1,2,3] и му поискаме четвърти например arr[3] това ще върне undefined
//                return false;
//            }
//            if(input[row][col] == input[row+1][col] &&
//                input[row][col] == input[row+2][col] &&
//                input[row][col] == input[row+2][col+1] && input[row][col] == 'o'){
//                figures['L']++;
//            }
//            break;
//        case 'J':
//            if(input[row+2] == undefined || input[row+2][col-1] == undefined) {//правим проверка дали сме излезли от матрицата, т.е ако имаме масив с 3 елемента  arr=[1,2,3] и му поискаме четвърти например arr[3] това ще върне undefined
//                return false;
//            }
//            if(input[row][col] == input[row+1][col] &&
//                input[row][col] == input[row+2][col] &&
//                input[row][col] == input[row+2][col-1] && input[row][col] == 'o'){
//                figures['J']++;
//            }
//            break;
//        case 'O':
//            if(input[row+1] == undefined || input[row+1][col+1] == undefined) {//правим проверка дали сме излезли от матрицата, т.е ако имаме масив с 3 елемента  arr=[1,2,3] и му поискаме четвърти например arr[3] това ще върне undefined
//                return false;
//            }
//            if(input[row][col] == input[row][col+1] &&
//                input[row][col] == input[row+1][col] &&
//                input[row][col] == input[row+1][col+1] && input[row][col] == 'o'){
//                figures['O']++;
//            }
//            break;
//        case 'Z':
//            if(input[row+1] == undefined || input[row+1][col+2] == undefined) {//правим проверка дали сме излезли от матрицата, т.е ако имаме масив с 3 елемента  arr=[1,2,3] и му поискаме четвърти например arr[3] това ще върне undefined
//                return false;
//            }
//            if(input[row][col] == input[row][col+1] &&
//                input[row][col] == input[row+1][col+1] &&
//                input[row][col] == input[row+1][col+2] && input[row][col] == 'o'){
//                figures['Z']++;
//            }
//            break;
//        case 'S':
//            if(input[row+1] == undefined || input[row+1][col-2] == undefined) {//правим проверка дали сме излезли от матрицата, т.е ако имаме масив с 3 елемента  arr=[1,2,3] и му поискаме четвърти например arr[3] това ще върне undefined
//                return false;
//            }
//            if(input[row][col] == input[row][col-1] &&
//                input[row][col] == input[row+1][col-1] &&
//                input[row][col] == input[row+1][col-2] && input[row][col] == 'o'){
//                figures['S']++;
//            }
//            break;
//        case 'T':
//            if(input[row+1] == undefined || input[row][col+2] == undefined) {//правим проверка дали сме излезли от матрицата, т.е ако имаме масив с 3 елемента  arr=[1,2,3] и му поискаме четвърти например arr[3] това ще върне undefined
//                return false;
//            }
//            if(input[row][col] == input[row][col+1] &&
//                input[row][col] == input[row][col+2] &&
//                input[row][col] == input[row+1][col+1] && input[row][col] == 'o'){
//                figures['T']++;
//            }
//            break;
//    }
//}


solve(  ['--o--o-',
        '--oo-oo',
        'ooo-oo-',
        '-ooooo-',
        '---oo--']
);