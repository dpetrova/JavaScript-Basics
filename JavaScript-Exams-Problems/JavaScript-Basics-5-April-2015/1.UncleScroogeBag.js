/**
 * Created by urukhai on 4/5/15.
 */
function solve(input){
    var sum = 0;
    for (var i = 0; i < input.length; i++) {
        var item = input[i].split(' ');

        if(item[0].toLowerCase() == 'coin' || item[0].toLowerCase() == 'coins') {
            if (!isNaN(parseFloat(item[1]) && isFinite(item[1]))) {
                var value = parseFloat(item[1]);
                if (value > 0 && value % 1 === 0) { //check if number is positive integer
                    sum += value;
                }
            }
        }
    }

    var gold = Math.floor(sum / 100);
    var silver = Math.floor((sum % 100) / 10);
    var bronze = Math.floor(sum - gold*100 - silver*10);

    console.log('gold : ' + gold);
    console.log('silver : ' + silver);
    console.log('bronze : ' + bronze);
}

solve([ 'coin 1',
        'coin two',
        'coin 5',
        'coin 10.50',
        'coin 20',
        'coin 50',
        'coin hundred',
        'cigars 1'
]);
