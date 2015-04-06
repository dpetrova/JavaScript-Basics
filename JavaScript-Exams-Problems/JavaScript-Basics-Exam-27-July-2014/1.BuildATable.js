/**
 * Created by urukhai on 3/19/15.
 */
function createTable (arr) {
    var start = Number(arr[0]);
    var end = Number(arr[1]);
    fibNumbers = calcFib(end);
    console.log('<table>');
    console.log('<tr><th>Num</th><th>Square</th><th>Fib</th></tr>');
    for (var i = start; i <= end; i++) {
        var num = i;
        var numSquare = i * i;
        var isFibNumber = fibNumbers[i] ? "yes" : "no";
        console.log(createTableRow(num, numSquare, isFibNumber));
    }
    console.log('</table>');

    function calcFib(maxNumber) {
        var fibNumbers = {0 : true, 1 : true};
        var f1 = 0;
        var f2 = 1;
        var f3;
        while (true) {
            f3 = f1 + f2;
            fibNumbers[f3] = true;
            if (f3 > maxNumber) {
                return fibNumbers;
            }
            f1 = f2;
            f2 = f3;
        }
    }

    function createTableRow(num, numSquare, isFibNumber) {
        var tableRow = '<tr>';
        for (var i in arguments) {
            tableRow += '<td>' + arguments[i] + '</td>';
        }
        tableRow += '</tr>';
        return tableRow;
    }
}

