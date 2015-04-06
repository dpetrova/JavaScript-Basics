/**
 * Created by urukhai on 3/26/15.
 */
function solve(input){
    var star1 = input[0].split(' '),
        star2 = input[1].split(' '),
        star3 = input[2].split(' '),
        spaceCoord = input[3].split(' '),
        spaceCoordX = Number(spaceCoord[0]),
        spaceCoordY = Number(spaceCoord[1]),
        numberOfTurns = Number(input[4]),
        starsName = [star1[0], star2[0], star3[0]],
        starsX = [Number(star1[1]), Number(star2[1]), Number(star3[1])],
        starsY = [Number(star1[2]), Number(star2[2]), Number(star3[2])],
        isInRange;


    for (var i = 0; i <= numberOfTurns; i++) {
        isInRange = false;
        for (var j = 0; j < starsName.length; j++) {
            isInRange = false;
            if(isInsideStar(spaceCoordX, spaceCoordY, starsX[j], starsY[j])){
                console.log(starsName[j].toLowerCase());
                isInRange = true;
                break;
            }
        }
        if(!isInRange) {
            console.log('space');
        }
        spaceCoordY += 1;
    }

    function isInsideStar(nX, nY, sX, sY) {
        return (nX <= sX + 1 && nX >= sX - 1) &&
            (nY <= sY + 1 && nY >= sY - 1);
    }


}

solve([ 'Sirius 3 7',
        'Alpha-Centauri 7 5',
        'Gamma-Cygni 10 10',
        '8 1',
        '6'
    ]
);

console.log();

solve([ 'Terra-Nova 16 2',
        'Perseus 2.6 4.8',
        'Virgo 1.6 7',
        '2 5',
        '4'
    ]
);