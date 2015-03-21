/**
 * Created by urukhai on 3/17/15.
 */
function filterNumbers (array) {
    var arrayOfNumbers = array.filter(function (item) {return !isNaN(parseFloat(item)) && isFinite(item);}); //isNaN() checks whether a number is an illegal number; isFinite() checks whether a number is a finite, legal number
    arrayOfNumbers.sort(function(a,b) {return a <= b;});
    var minNumber = arrayOfNumbers[arrayOfNumbers.length-1];
    var maxNumber = arrayOfNumbers[0];
    var mostFrequentNumber = mostFrequentNum(arrayOfNumbers);
    console.log('Min number: ' + minNumber);
    console.log('Max number: ' + maxNumber);
    console.log('Most frequent number: ' + mostFrequentNumber);
    console.log(arrayOfNumbers);
}

function mostFrequentNum (array) {
    var mostFreq;
    var frequencies = 0;
    var count = 0;
    for (var i = 0; i < array.length-1; i++) {
        if(array[i] == array[i+1]){
            count++;
            if (count > frequencies) {
                frequencies = count;
                mostFreq = array[i];
            }
        }else {
            count = 0;
        }
    }
    return mostFreq;
}

filterNumbers(["Pesho", 2, "Gosho", 12, 2, "true", 9, undefined, 0, "Penka", { bunniesCount : 10}, [10, 20, 30, 40]]);