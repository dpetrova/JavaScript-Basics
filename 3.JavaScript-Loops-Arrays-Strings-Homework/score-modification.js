/**
 * Created by urukhai on 3/17/15.
 */
function scoreModification(array) {
    var validScores = array.filter(function (score) {return score >= 0 && score <= 400;});
    var scaledScores = validScores.map(function(element) {return element * 0.8;});
    //var scaledScores = [];
    //validScores.forEach(function(element, index) {
    //    scaledScores[index] = element * 0.8;
    //});
    scaledScores = scaledScores.map(function(element) {return Math.round(element * 100) / 100});
    //scaledScores = scaledScores.map(function roundToTwo(element) {
    //    return +(Math.round(element + "e+2")  + "e-2");
    //});
    var sortedScores = scaledScores.sort(function(a,b) {return a >= b;});
    console.log(sortedScores);
}

scoreModification([200, 120, 23, 67, 350, 420, 170, 212, 401, 615, -1]);