/**
 * Created by Daniela on 13/05/2015.
 */

function kitodarTheMiner(input){
    var mines = [];
    for (var i in input) {
        var line = input[i].toLowerCase();
        var lineArr = line.split(/\-/g);
        //lineArr = lineArr.filter(Boolean);
        mines.push(lineArr);
    }
    //console.log(mines);
    var result = [];
    var gold = 0;
    var silver = 0;
    var diamonds = 0;
    for (var j in mines) {
        var mine = mines[j];
        if (mine.length > 1) {
            var oreAndQuantity = mine[1].split(/[\s+\:]+/g);
            var names = mine[0].split(/\s+/g);

            //console.log(oreAndQuantity);
            //console.log(names);
            if (names[0] == 'mine') {
                switch (oreAndQuantity[1]) {
                    case 'gold':
                        gold += Number(oreAndQuantity[2]);
                        break;
                    case 'silver':
                        silver += Number(oreAndQuantity[2]);
                        break;
                    case 'diamonds':
                        diamonds += Number(oreAndQuantity[2]);
                        break;
                    case 'gold:':
                        gold += Number(oreAndQuantity[2]);
                        break;
                    case 'silver:':
                        silver += Number(oreAndQuantity[2]);
                        break;
                    case 'diamonds:':
                        diamonds += Number(oreAndQuantity[2]);
                        break;
                }
            }
        }
    }

    console.log('*Silver: ' + silver);
    console.log('*Gold: ' + gold);
    console.log('*Diamonds: ' + diamonds);
}

kitodarTheMiner(['mine bobovDol - gold : 10',
                'mine medenRudnik - silver : 22',
                'mine chernoMore - shrimps : 24',
                'gold:50']);

console.log();

kitodarTheMiner(['mine bobovdol - gold : 10',
                'mine - diamonds : 5',
                'mine colas - wood : 10',
                'mine myMine - silver :  14',
                'mine silver:14 - silver : 14']);

