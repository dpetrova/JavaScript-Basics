/**
 * Created by urukhai on 4/1/15.
 */
function solve(input){
    var inputArr = [],
        obj = {};

    for (var i = 0; i < input.length - 1; i++) {
        //трябва да сплитне по: 0 или повече '.' , една '*' и 0 или повече '.'
        var line = input[i].split(/[\.]*[\*]{1}[\.]*/g);
        inputArr.push(line);
    }

    for (var i in inputArr) {
        var person = inputArr[i];
        var name = person[0];
        var stuff = person[1];
        var isFood = (person[2] === 'true'); //за да може да го даде като true/false, а не стринг
        var isDrink = (person[3] === 'true');
        var isFragile = (person[4] === 'true');
        var weight = Number(person[5]);
        var transferredWith = person[6];
        //if(!obj[name]){  //може също: !obj.hasOwnProperty(name)
        //    obj[name] = {};
        //}
        //if(!obj[name][stuff]){
        //    obj[name][stuff] = {};
        //}
        //obj[name][stuff].kg = weight;
        //obj[name][stuff].fragile = isFragile;
        //if(isFood == true)
        //    obj[name][stuff].type = 'food';
        //else if(isDrink == true)
        //    obj[name][stuff].type = 'drink';
        //else {
        //    obj[name][stuff].type = 'other';
        //}
        //obj[name][stuff].transferredWith = transferredWith;

        //по-кратко:
        if(!(name in obj)) {
            obj[name] = {};
        }

        var type = '';
        isFood ? type = 'food' : isDrink ? type = 'drink' : type = 'other';
        obj[name][stuff] = {'kg': weight, 'fragile': isFragile, 'type': type, 'transferredWith': transferredWith};
    }

    var sortingCriteria = input[input.length - 1];

    //if(sortingCriteria === 'luggage name'){
    //    var outputStuffSort = {};
    //    Object.keys(obj).forEach(function(key) {
    //        outputStuffSort[key]={};
    //        var sortedInnerKeys = Object.keys(obj[key]).sort();
    //
    //        sortedInnerKeys.forEach(function (innerkey) {
    //            outputStuffSort[key][innerkey] = obj[key][innerkey];
    //        })
    //    });
    //    console.log(JSON.stringify(outputStuffSort));
    //} else if(sortingCriteria === 'weight'){
    //    var outputKgSort = {};
    //    Object.keys(obj).forEach(function(key) {
    //        outputKgSort[key]={};
    //        var sorted = Object.keys(obj[key]).sort(function (a,b) {
    //            return obj[key][a].kg - obj[key][b].kg;
    //        });
    //        sorted.forEach(function (value) {
    //            outputKgSort[key][value] = obj[key][value];
    //        })
    //    });
    //    console.log(JSON.stringify(outputKgSort))
    //} else if(sortingCriteria === 'strict'){
    //    console.log(JSON.stringify(obj));
    //}


    var toPrint = {};

    for (var owner in obj) {
        var keys = Object.keys(obj[owner]);

        keys.sort(function (a, b) {
            switch (sortingCriteria) {
                case 'luggage name':
                    return a.localeCompare(b);
                    break;
                case 'weight':
                    return obj[owner][a].kg < obj[owner][b].kg ? -1 : obj[owner][a].kg == obj[owner][b].kg ? 0 : 1;
                    break;
            }
        });

        toPrint[owner] = {};

        for (var j in keys) {
            toPrint[owner][keys[j]] = obj[owner][keys[j]];
        }
    }

    console.log(JSON.stringify(toPrint));

}


solve( ['Yana Slavcheva.*.clothes.*.false.*.false.*.false.*.2.2.*.backpack',
        'Kiko.*.socks.*.false.*.false.*.false.*.0.2.*.backpack',
        'Kiko.*.banana.*.true.*.false.*.false.*.3.2.*.backpack',
        'Kiko.*.sticks.*.false.*.false.*.false.*.1.6.*.ATV',
        'Kiko.*.glasses.*.false.*.false.*.true.*.3.*.ATV',
        'Manov.*.socks.*.false.*.false.*.false.*.0.3.*.ATV',
        'luggage name'
       ]
);