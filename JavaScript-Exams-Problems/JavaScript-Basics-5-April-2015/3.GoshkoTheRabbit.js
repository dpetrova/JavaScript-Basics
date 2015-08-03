function goshkoTheRabbit(input){
    var directions = input[0].split(', ');
    var result = {"&":0,"*":0,"#":0,"!":0,"wall hits":0};
    var matrix = [];
    for (var i = 1; i < input.length; i++) {
        var line = input[i].split(', ');
        matrix.push(line);
    }
    //console.log(directions);
    //console.log(matrix);

    var patternCarrots = /\{\!\}/g;
    var patternCabbage = /\{\*\}/g;
    var patternLettuce = /\{\&\}/g;
    var patternTurnip = /\{\#\}/g;
    var position = {'row': 0, 'col': 0};
    var output = [];
    for (var index in directions) {
        var isVisited = false;
        var currDirection = directions[index];
        switch (currDirection) {
            case 'up':
                position['row']--;
                break;
            case 'down':
                position['row']++;
                break;
            case 'left':
                position['col']--;
                break;
            case 'right':
                position['col']++;
                break;
        }
        if (position['row'] < 0) {
            position['row']++;
            result['wall hits']++;
            isVisited = true;
        }
        if (position['row'] > matrix.length - 1) {
            position['row']--;
            result['wall hits']++;
            isVisited = true;
        }
        if (position['col'] < 0) {
            position['col']++;
            result['wall hits']++;
            isVisited = true;
        }
        if (position['col'] > matrix[0].length - 1) {
            position['col']--;
            result['wall hits']++;
            isVisited = true;
        }
        if (isVisited == false) {
            var currCell = matrix[position['row']][position['col']];
            //console.log(currCell);
            var matchCarrots = currCell.match(patternCarrots);
            var matchCabbage = currCell.match(patternCabbage);
            var matchLettuce = currCell.match(patternLettuce);
            var matchTurnip = currCell.match(patternTurnip);
            //console.log(matchTurnip);
            if (matchLettuce) {
                result["&"] += matchLettuce.length;
            }
            if (matchCabbage) {
                result["*"] += matchCabbage.length;
            }
            if (matchTurnip) {
                result["#"] += matchTurnip.length;
            }
            if (matchCarrots) {
                result["!"] += matchCarrots.length;
            }
            matrix[position['row']][position['col']] = matrix[position['row']][position['col']].replace(patternCarrots, '@');
            matrix[position['row']][position['col']] = matrix[position['row']][position['col']].replace(patternCabbage, '@');
            matrix[position['row']][position['col']] = matrix[position['row']][position['col']].replace(patternLettuce, '@');
            matrix[position['row']][position['col']] = matrix[position['row']][position['col']].replace(patternTurnip, '@');
            //console.log(currCell);
            output.push(matrix[position['row']][position['col']]);
        }
    }

    //console.log(result);
    var resultAsString = '{"&":' + result["&"] + ',"*":' + result["*"] + ',"#":' + result["#"] + ',"!":' + result["!"] + ',"wall hits":' + result["wall hits"] + '}';
    console.log(resultAsString);

    if(output.length == 1) {
        console.log(output[0]);
    }else if(output.length > 1){
        console.log(output.join('|'));
    } else {
        console.log('no');
    }
}


goshkoTheRabbit(['right, up, up, down',
    'asdf, as{#}aj{g}dasd, kjldk{}fdffd, jdflk{#}jdfj',
    'tr{X}yrty, zxx{*}zxc, mncvnvcn, popipoip',
    'poiopipo, nmf{X}d{X}ei, mzoijwq, omcxzne']);

console.log();

goshkoTheRabbit(['up, right, left, down','as{!}xnk']);

console.log();

goshkoTheRabbit(['right, down, down, right, down, down, down, down, down, down, down',
                'a{!}as, a{!}as, a{!}as, a{!}as, a{!}as, a{!}as, a{!}as, a{!}as, a{!}as, a{!}as',
                'a{!}as, a{!}as, a{!}as, a{!}as, a{!}as, a{!}as, a{!}as, a{!}as, a{!}as, a{!}as',
                'a{!}as, a{!}as, a{!}as, a{!}as, a{!}as, a{!}as, a{!}as, a{!}as, a{!}as, a{!}as',
                'a{!}as, a{!}as, a{!}as, a{!}as, a{!}as, a{!}as, a{!}as, a{!}as, a{!}as, a{!}as',
                'a{!}as, a{!}as, a{!}as, a{!}as, a{!}as, a{!}as, a{!}as, a{!}as, a{!}as, a{!}as',
                'a{!}as, a{!}as, a{!}as, a{!}as, a{!}as, a{!}as, a{!}as, a{!}as, a{!}as, a{!}as',
                'a{!}as, a{!}as, a{!}as, a{!}as, a{!}as, a{!}as, a{!}as, a{!}as, a{!}as, a{!}as',
                'a{!}as, a{!}as, a{!}as, a{!}as, a{!}as, a{!}as, a{!}as, a{!}as, a{!}as, a{!}as',
                'a{!}as, a{!}as, a{!}as, a{!}as, a{!}as, a{!}as, a{!}as, a{!}as, a{!}as, a{!}as',
                'a{!}as, a{!}as, a{!}as, a{!}as, a{!}as, a{!}as, a{!}as, a{!}as, a{!}as, a{!}as)']);

