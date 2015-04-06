/**
 * Created by urukhai on 3/22/15.
 */
function solve (input) {
    var maxSum = -Infinity; //(Number.MIN_VALUE e най-малкото полож. число близко до 0)
    var maxSumAsString = '';
    for (var i = 2; i < input.length -1; i++) { //първите два реда и последния ги изключваме от цикъла
        var nums = input[i].match(/\-?[\d\.]+/g); //'?-' означава 0 или 1 символа '-'; + означава 1 или повече символа; '.' е точката на дробното число
        var sum = 0;
        if (nums != undefined) { //ако масива не е празен, т.е. има данни (може и с null)
            for (var j = 0; j < nums.length; j++) {
                sum += Number(nums[j]);
            }
            if (sum > maxSum) {
                maxSum = sum;
                maxSumAsString = maxSum + ' =';
                for (var k = 0; k < nums.length; k++) {
                    maxSumAsString += ' ' + nums[k] + ' +'; //конкатенираме
                }
            }
        }
    }

    if(maxSumAsString == ''){ //ако не ни е подадена нито една стойност
        console.log('no data')
    } else {
        console.log(maxSumAsString.slice(0, maxSumAsString.length - 2)); //отрязваме последния ' +' от стринга, които не са ни нужни
    }
}

solve(['<table>',
        '<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>',
        '<tr><td>Sofia</td><td>26.2</td><td>8.20</td><td>-</td></tr>',
        '<tr><td>Varna</td><td>11.2</td><td>18.00</td><td>36.10</td></tr>',
        '<tr><td>Plovdiv</td><td>17.2</td><td>12.3</td><td>6.4</td></tr>',
        '<tr><td>Bourgas</td><td>-</td><td>24.3</td><td>-</td></tr>',
        '</table>']);

solve(['<table>',
'<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>',
'<tr><td>Sofia</td><td>-</td><td>-</td><td>-</td></tr>',
'</table>']);
