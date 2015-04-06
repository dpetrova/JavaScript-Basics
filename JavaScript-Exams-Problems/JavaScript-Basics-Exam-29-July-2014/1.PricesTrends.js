/**
 * Created by urukhai on 3/21/15.
 */
function solve(input){
    var numbers = [];
    for (var i = 0; i < input.length; i++) {
        numbers[i] = Number(Number(input[i]).toFixed(2)); //първо превръщаме стринга в число и го фиксваме до 2 цифри след запетайката; и тъй като toFixed() връща стринг отново го парсваме към число

    }

    console.log('<table>');
    console.log('<tr><th>Price</th><th>Trend</th></tr>');

    if(numbers.length !== 0) //проверка дали не ни е подаден празен масив
    console.log('<tr><td>' + numbers[0].toFixed(2) + '</td><td><img src="fixed.png"/></td></tr>');
    var image = '';
    for (var j = 1; j < numbers.length; j++) {
       if (numbers[j] < numbers[j-1]){
           image = 'down';
       } else if (numbers[j] > numbers[j-1]) {
           image = 'up';
       } else {
           image = 'fixed';
       }
//        тази проверка вместо с if-else може да се направи и с тернарен оператор:
//        numbers[j] < numbers[j-1] ? image = 'down' :
//              numbers[j] > numbers[j-1] ? image = 'up' : image = 'fixed';
        console.log('<tr><td>' +  numbers[j].toFixed(2) + '</td><td><img src=\"' + image + '.png"/></td></tr>');
    }
    console.log('</table>');
}

solve(['36.333',
       '36.5',
       '37.019',
       '35.4',
       '35',
       '35.001',
       '36.225']
);