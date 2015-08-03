function rollanGarros(input) {

    var regex = /([A-Za-z\s]+)vs\.([A-Za-z\s]+):([\d\s\-]+)/g;
    var result = [];

    function updatePlayer(name, matchesWon, matchesLost, setsWon, setsLost, gamesWon, gamesLost) {
        var player = result.filter(function (p) {
            return p.name === name;
        })[0];

        if (!player) {
            result.push(
                {
                    name: name,
                    matchesWon: matchesWon,
                    matchesLost: matchesLost,
                    setsWon: setsWon,
                    setsLost: setsLost,
                    gamesWon: gamesWon,
                    gamesLost: gamesLost
                });
        } else {
            player.matchesWon += matchesWon;
            player.matchesLost += matchesLost;
            player.setsWon += setsWon;
            player.setsLost += setsLost;
            player.gamesWon += gamesWon;
            player.gamesLost += gamesLost;
        }
    }


    for (var index in input) {
        var matches = regex.exec(input[index]);
        while(matches) {
            //console.log(matches);
            var whitespacePattern = /\s+/g;
            //check first player
            var firstPlayer = matches[1].trim().replace(whitespacePattern, ' ');
            var secondPlayer = matches[2].trim().replace(whitespacePattern, ' ');
            var firstPlayerGamesWon = 0;
            var firstPlayerGamesLost = 0;
            var firstPlayerSetsWon = 0;
            var firstPlayerSetsLost = 0;
            var firstPlayerMatchesWon = 0;
            var firstPlayerMatchesLost = 0;
            var secondPlayerGamesWon = 0;
            var secondPlayerGamesLost = 0;
            var secondPlayerSetsWon = 0;
            var secondPlayerSetsLost = 0;
            var secondPlayerMatchesWon = 0;
            var secondPlayerMatchesLost = 0;
            var sets = matches[3].trim().split(' ');
            //console.log(sets);
            for (var i in sets) {
                var currSet = sets[i];
                //console.log(currSet);
                var points1 = Number(currSet[0]);
                var points2 = Number(currSet[2]);
                if (points1 > points2) {
                    firstPlayerSetsWon++;
                    secondPlayerSetsLost++;
                } else {
                    firstPlayerSetsLost++;
                    secondPlayerSetsWon++;
                }
                firstPlayerGamesWon += points1;
                firstPlayerGamesLost += points2;
                secondPlayerGamesWon += points2;
                secondPlayerGamesLost += points1;
            }
            if(firstPlayerSetsWon > firstPlayerSetsLost) {
                firstPlayerMatchesWon++;
                secondPlayerMatchesLost++;
            }else {
                firstPlayerMatchesLost++;
                secondPlayerMatchesWon++;
            }
            updatePlayer(firstPlayer, firstPlayerMatchesWon, firstPlayerMatchesLost, firstPlayerSetsWon, firstPlayerSetsLost, firstPlayerGamesWon, firstPlayerGamesLost);
            updatePlayer(secondPlayer, secondPlayerMatchesWon, secondPlayerMatchesLost, secondPlayerSetsWon, secondPlayerSetsLost, secondPlayerGamesWon, secondPlayerGamesLost);

            matches = regex.exec(input[index]);
        }

    }
    result.sort(function(firstPlayer, secondPlayer){
        if(firstPlayer.matchesWon == secondPlayer.matchesWon){
            if(firstPlayer.setsWon == secondPlayer.setsWon){
                if(firstPlayer.gamesWon == secondPlayer.gamesWon){
                    return firstPlayer.name.localeCompare(secondPlayer.name);
                }
                return secondPlayer.gamesWon - firstPlayer.gamesWon;
            }
            return secondPlayer.setsWon - firstPlayer.setsWon;
        }
        return secondPlayer.matchesWon - firstPlayer.matchesWon;
    });

    console.log(JSON.stringify(result));

}


rollanGarros(['Novak Djokovic vs. Roger Federer : 6-3 6-3',
    'Roger    Federer    vs.        Novak Djokovic    :         6-2 6-3',
    'Rafael Nadal vs. Andy Murray : 4-6 6-2 5-7',
    'Andy Murray vs. David Ferrer : 6-4 7-6',
    'Tomas Bedrych vs. Kei Nishikori : 4-6 6-4 6-3 4-6 5-7',
    'Grigor Dimitrov vs. Milos Raonic : 6-3 4-6 7-6 6-2',
    'Pete Sampras vs. Andre Agassi : 2-1',
    'Boris Beckervs.Andre        			Agassi:2-1']);

console.log();

rollanGarros([  'Rafa Nadal vs. His Knees : 5-4 2-3 7-5 4-6 0-1',
                'Roger 		Federervs.His			Age:7-6 6-3 6-1',
                'HuanMartin  delPotro			vs.Wrist Injuries:		6-3		1-6 2-6',
                'WAYNE ODESNIK vs. Doping TwiceAlready             :0-6 0-6',
                'Rafa Nadal vs. His Knees : 5-4 1-3 7-5 4-6 0-1',
                'Roger 		Federervs.His			Age:7-6 6-3 6-1',
                'HuanMartin  delPotro			vs.Wrist Injuries:		6-3		1-6 2-6',
                'WAYNE ODESNIK vs. Doping TwiceAlready             :0-6 0-6 6-0 6-0 0-6',
                'Rafa Nadal vs. His Knees : 7-4 2-3 7-5 4-6 2-5',
                'Roger 		Federervs.His			Age:7-6 6-3 6-1',
                'HuanMartin  delPotro			vs.Wrist Injuries:		6-3		1-6 2-6',
                'WAYNE ODESNIK vs.Doping TwiceAlready             :0-6 0-6',
                'Rafa Nadalvs.His Knees : 5-3 2-3 7-1 4-6 0-1',
                'Roger Federer	vs.		His Age:7-6 6-3 6-1',
                'HuanMartin  delPotrn			vs.Wrist Injuries:		6-3		1-6 2-6',
                'WAYNE ODESNIK vs. Doping TwiceAlready             :0-6 0-6',
                'Rafa Nadal vs. His Knees : 5-4 2-3 7-5 4-6 0-1',
                'Roger 		Federervs.His			Age:7-6 6-3 6-1',
                'HuanMartin  delPotrn	  vs.Wrist Injuries:		6-3		1-6 2-6',
                'WAYNE ODESNIKvs. Doping TwiceAlready             :0-6 0-6',
                'Rafa Nadal vs. His Knees : 5-1 2-4 7-5 2-6 0-1',
                'Roger 		Federervs.His			Age:7-6 6-3 6-1',
                'HuanMartin  	delPotrn			vs.Wrist Injuries:		6-3 1-6 2-6',
                'WAYNE 	ODESNIK 	vs. Doping 		TwiceAlready	:1-6 2-6']);