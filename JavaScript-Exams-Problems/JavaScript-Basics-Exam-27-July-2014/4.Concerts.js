/**
 * Created by urukhai on 4/2/15.
 */
function solve(input){

    //fill data in Object
    var obj = {};
    for (var i in input) {
        var tokens = input[i].split('|');
        var band = tokens[0].trim();
        var town = tokens[1].trim();
        var date = tokens[2].trim();
        var stadium = tokens[3].trim();

        if (!obj[town]) {
            obj[town] = {};
        }
        if (!obj[town][stadium]) {
            obj[town][stadium] = [];
        }
        if (obj[town][stadium].indexOf(band) == -1) {
            obj[town][stadium].push(band);
        }
    }

    // Sort the properties of the Object
    obj = sortObjectProperties(obj);
    for (var town in obj) {
        obj[town] = sortObjectProperties(obj[town]);
        for (var stadium in obj[town]) {
            obj[town][stadium].sort();
        }
    }

    // Print the concertInfo as JSON string
    console.log(JSON.stringify(obj));

    function sortObjectProperties(object) {
        var keysSorted = Object.keys(object).sort();
        var sortedObj = {};
        for (var i = 0; i < keysSorted.length; i++) {
            var key = keysSorted[i];
            sortedObj[key] = object[key];
        }
        return sortedObj;
    }
}



solve( ['ZZ Top | London | 2-Aug-2014 | Wembley Stadium',
        'Iron Maiden | London | 28-Jul-2014 | Wembley Stadium',
        'Metallica | Sofia | 11-Aug-2014 | Lokomotiv Stadium',
        'Helloween | Sofia | 1-Nov-2014 | Vassil Levski Stadium',
        'Iron Maiden | Sofia | 20-June-2015 | Vassil Levski Stadium',
        'Helloween | Sofia | 30-July-2015 | Vassil Levski Stadium',
        'Iron Maiden | Sofia | 26-Sep-2014 | Lokomotiv Stadium',
        'Helloween | London | 28-Jul-2014 | Wembley Stadium',
        'Twisted Sister | London | 30-Sep-2014 | Wembley Stadium',
        'Metallica | London | 03-Oct-2014 | Olympic Stadium',
        'Iron Maiden | Sofia | 11-Apr-2016 | Lokomotiv Stadium',
        'Iron Maiden | Buenos Aires | 03-Mar-2014 | River Plate Stadium'
    ]
);