/**
 * Created by urukhai on 3/26/15.
 */
function solve(input){
    var splitDate = [],
        dates = [],
        ewokLine = new Date(1973, 4, 25),
        min = new Date(1900, 0, 1),
        max = new Date(2015, 0, 1),
        isFan = false,
        isHater = false;


    for (var i in input) {
        splitDate = input[i].split('.');
        var currDate = new Date(splitDate[2], splitDate[1] - 1, splitDate[0]);
        if(currDate > min && currDate < max){
            if(currDate >= ewokLine){
                isFan = true;
            }
            else if(currDate < ewokLine){
                isHater = true;
            }
            dates.push(currDate);
        }
    }

    if (!dates.length) {
        console.log('No result');
        return;
    }

    dates.sort(function(a, b) {
        return a.getTime() - b.getTime();
    });

    if (isFan) {
        printResult(dates[dates.length - 1], 'fan');
    }
    if (isHater) {
        printResult(dates[0], 'hater');
    }

    function printResult(date, type) {
        console.log('The biggest ' + type + ' of ewoks was born on ' + date.toDateString());
    }
}

solve(  ['22.03.2014',
         '17.05.1933',
         '10.10.1954'
        ]
);
console.log();
solve(  ['22.03.1700',
        '01.07.2020']
);
console.log();
solve(  ['22.03.2000']
);