/**
 * Created by urukhai on 4/5/15.
 */
function fleaRacing (input){

    //fill input data in array of objects
    var numOfJumps = Number(input[0]);
    var trackLength = Number(input[1]);
    var result = [];
    for (var i = 2; i < input.length; i++) {
        var fleaData = input[i].split(', ');
        var flea = {};
        flea['name'] = fleaData[0];
        flea['jumpDistance'] = Number(fleaData[1]);
        flea['overallDistance'] = 0;
        result.push(flea);
    }
    //console.log(result);

    //perform racing
    var winner;
    var maxDistance = 0;
    for (var i = 0; i < numOfJumps; i++) {
        for (var index in result) {
            var currFlea = result[index];
            currFlea['overallDistance'] += currFlea['jumpDistance'];
            if(currFlea['overallDistance'] >= maxDistance){
                maxDistance = currFlea['overallDistance'];
                winner = currFlea['name'];
            }
            if(currFlea['overallDistance'] >= trackLength-1){
                currFlea['overallDistance'] = trackLength-1;
                break;
            }
        }
    }
    //console.log(result);
    //console.log(winner);

    //check if all overall distances are equal
    if(maxDistance < trackLength) {
        var allEqual = true;
        for (var i = 0; i < result.length; i++) {
            if (result[0]['overallDistance'] != result[i]['overallDistance']) {
                allEqual = false;
                break;
            }
        }
        if (allEqual === true) {
            winner = result[result.length - 1]['name'];
            //} else {
            //    result.sort(function(a,b){
            //        return a['overallDistance'] < b['overallDistance'];
            //    });
            //    winner = result[0]['name'];
        }
    }
    //console.log(winner);

    //print results
    var tribunes = new Array(trackLength+1).join('#');
    console.log(tribunes);
    console.log(tribunes);
    for (var index in result) {
        var initial = result[index]['name'].substr(0, 1).toUpperCase();
        var trackBefore = new Array(result[index]['overallDistance'] + 1).join('.');
        var trackAfter = new Array(trackLength - result[index]['overallDistance']).join('.');
        console.log(trackBefore + initial + trackAfter);
    }
    console.log(tribunes);
    console.log(tribunes);
    console.log('Winner: ' + winner);

}


fleaRacing(['10',
        '19',
        'angel, 9',
        'Boris, 10',
        'Georgi, 3',
        'Dimitar, 7']);

console.log();

fleaRacing([ '3',
        '5',
        'cura, 1',
        'Pepi, 1',
        'UlTraFlee, 1',
        'BOIKO, 1']);

console.log();

fleaRacing([ '3',
        '40',
        'S, 5',
        'L, 1',
        'O, 7',
        'C, 3',
        'H, 10',
        'A, 12',
        'I, 5',
        'N, 8',
        'O, 0',
        'S, 6']);

console.log();

fleaRacing(['3',
        '100',
    'kiril, 0']);

console.log();

fleaRacing(['1',
            '1',
            'pesho, 1',
            'gosho, 1']);