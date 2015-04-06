/**
 * Created by urukhai on 3/31/15.
 */
function solve(map) {
    var start = findStartPosition(map),
        row = start[0],
        col = start[1],
        currLine,
        wind,
        state = {status: 'falling', row: row, col: col };


    for (var i = row + 1 ; i < map.length; i++) {
        currLine = map[i];
        wind = checkDirection(currLine);
        col += wind;
        state = checkPos(currLine, col);
        if(state.status !== 'falling'){
            break;
        }
    }

    printOutput(state);


    function printOutput(state){
        switch(state.status) {
            case 'cliffLanded':
                console.log('Got smacked on the rock like a dog!');
                break;
            case 'waterLanded':
                console.log('Drowned in the water like a cat!');
                break;
            case 'groundLanded':
                console.log('Landed on the ground like a boss!');
                break;
        }
        console.log(state.row + ' ' + state.col);
    }


    function checkPos(currLine, col) {
        if (currLine[col] == '/' || currLine[col] == '\\' || currLine[col] == '|') { //escaping \ with another \
            state.status = 'cliffLanded';
        } else if (currLine[col] == '~') {
            state.status = 'waterLanded';
        } else if (currLine[col] == '_') {
            state.status = 'groundLanded';
        }else {
            state.status = 'falling';
        }
        state.row += 1;
        state.col = col;
        return state;
    }


    function checkDirection(currLine) {
        wind = 0;
        for (var k in currLine) {
            if (currLine[k] === '<') {
                wind -= 1;
            }
            if (currLine[k] === '>') {
                wind += 1;
            }
        }
        return wind;
    }


    function findStartPosition(map) {
        start = [];
        for (var i in map) {
            for (var j in map[i]) {
                if (map[i][j] == 'o') {
                    start.push(Number(i));
                    start.push(Number(j));
                }
            }
        }
        return start;
    }
}


solve(
    [
        "-------------o-<<--------",
        "-------->>>>>------------",
        "---------------->-<---<--",
        "------<<<<<-------/\\--<--",
        "--------------<--/-<\\----",
        ">>--------/\\----/<-<-\\---",
        "---------/<-\\--/------\\--",
        "<-------/----\\/--------\\-",
        "\\------/--------------<-\\",
        "-\\___~/------<-----------"
    ]);

console.log();

solve( ['>>>>>>>>>>>o<<<<<<<<<<<<<',
        '----------~~~------------',
        '--------~/~~~\\~----------',
        '-------~/~---~\\~---------',
        '------~/~-----~\\~--------',
        '-----~/~-------~\\~-------',
        '----~/~---------~\\~------',
        '---~/~-----------~\\~-----',
        '--~/~-------------~\\~----',
        '-~/~---------------~\\~---'
      ]
)