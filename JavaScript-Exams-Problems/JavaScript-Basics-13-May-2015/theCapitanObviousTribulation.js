/**
 * Created by Daniela on 13/05/2015.
 */

function theCapitanObviousTribulation(input){
    var firstText = input[0].split(/[^a-zA-Z]+/g);
    firstText = firstText.filter(Boolean);
    //console.log(firstText);
    var secondText = input[1].split(/[\.\!\?]+/g);
    var punctuation = input[1].match(/[\.\!\?]/g);
    //console.log(punctuation);
    secondText = secondText.filter(Boolean);
    //console.log(secondText);
    var wordObj = [];
    for (var i in firstText) {
        var word = firstText[i].toLowerCase();
        if(!wordObj[word]){
            wordObj[word] = 0;
        }
        wordObj[word]++;
    }
    //console.log(wordObj);
    var result = [];
    for (var j in wordObj) {
        //var item = wordObj[j];
        if(wordObj[j] >= 3){
            result.push(j);
        }
    }
    //console.log(result);
    if(result.length == 0){
        console.log("No words");
    } else {
        var output = [];
        for (var i = 0; i < secondText.length; i++) {
            var line = secondText[i].trim();
            var splittedLine = line.split(/[\s,]+/);
            var count = 0;
            for (var j = 0; j < result.length; j++) {
                var keyword = result[j];
                for (var k = 0; k < line.length; k++) {
                    if (splittedLine[k] == keyword) {
                        count++;
                    }

                }

            }
            if (count >= 2) {
                var finalLine = line + punctuation[i];
                output.push(finalLine);
            }
        }
        if(output.length == 0){
            console.log("No sentences");
        } else {
            for (var index in output) {
                console.log(output[index]);
            }
        }
    }
}



theCapitanObviousTribulation(["Captain Obvious was walking down the street. As the captain was walking a person came and told him: You are Captain Obvious! He replied: Thank you CAPTAIN OBVIOUS you are the man!",
    "The captain was walking and he was obvious. He did not know what was going to happen to you in the future. Was he curious? We do not know."]);