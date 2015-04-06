/**
 * Created by urukhai on 3/23/15.
 */
function soccerResults(input){
    var results = {};
    var regex = /([A-Za-z ]+)\/?([A-Za-z ]+):?([ \d]+)-?([ \d]+)/; //правим група за всеки едеин елемент от стринга
    var match;

    for (var i = 0; i < input.length; i++) {
        match = regex.exec(input[i]);
        //match[0] е целия израз, а останалите са за всеки отделен елемент
        var teamHome = match[1].trim();
        var teamAway = match[2].trim();
        var goalsHome = Number(match[3].trim());
        var goalsAway = Number(match[4].trim());

        processResults(results, teamHome, teamAway, goalsHome, goalsAway);
        processResults(results, teamAway, teamHome, goalsAway, goalsHome);
    }

    function processResults(results, teamHome, teamAway, goalsHome, goalsAway){
        if (!results[teamHome]) { //ако results не съдържа поле teamHome
            results[teamHome] = { goalsScored: 0, goalsConceded: 0, matchesPlayedWith: []}; //се създава такова
        }
        //ако вече съдържа, добавяме головете и опонентите
        results[teamHome].goalsScored += goalsHome;
        results[teamHome].goalsConceded += goalsAway;
        //за да не се повтарят опонентите се проверява дали вече не сме ги вкарали
        //ако има вече такъв indexOf ще върне индекса, където се намира; ако не ще върне -1
        if (results[teamHome].matchesPlayedWith.indexOf(teamAway) == -1) {
            results[teamHome].matchesPlayedWith.push(teamAway);
        }
    }

        //вадим и сортираме ключовете
        var keys = Object.keys(results); //ще извади всички ключове на обекта results
        keys.sort();

        //в новия масив ги присвояваме в сортирания ред
        var sortedResults = {};
        for (var i = 0; i < keys.length; i++) {
            sortedResults[keys[i]] = results[keys[i]];
            sortedResults[keys[i]].matchesPlayedWith.sort();
        }

    console.log(JSON.stringify(sortedResults));
}

soccerResults( ['Germany / Argentina: 1-0',
                'Brazil / Netherlands: 0-3',
                'Netherlands / Argentina: 0-0',
                'Brazil / Germany: 1-7',
                'Argentina / Belgium: 1-0',
                'Netherlands / Costa Rica: 0-0',
                'France / Germany: 0-1',
                'Brazil / Colombia: 2-1']
);