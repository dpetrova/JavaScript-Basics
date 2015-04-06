function solve(input) {
    //we get the input and split to array of words
    var words = input[0].split(' ');

    //we find the longest word
    var longestWord = 0;
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > longestWord) {
            longestWord = words[i].length;
        }
    }

    //превръщаме всяка дума от масива в масив от букви
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].split('');
    }

    var letters = '';
    for (var i = 0; i < longestWord; i++) { //тук вървим по буквите от думите
        for (var j = 0; j < words.length; j++) { //тук вървим по думите от масива
            if(words[j].length > 0) { //правим проверка дали думата не е свършила (за да не дава празни стрингове)
                letters += words[j].pop(); //махаме последната буква от всяка дума и я прибавяме към стринга letters
            }
        }
    }

    letters = letters.split('');
    for (var i = 0; i < letters.length; i++) {
        var numMoves = letters[i].toLowerCase().charCodeAt(0) - 96; //изчисляваме броя на местенията като от позицията в ASCII вадим 96 и така получаваме позицията на буквата в азбуката
        var newPosition = (i + numMoves) % letters.length; //започваме преместването от позицията i, където се намира буквата, а с (% letters.length) осигуряваме, че ако излезе от стринга ще започне пак отначало
        var currChar = letters[i];
        letters.splice(i, 1); //махаме буквата на позиция i
        letters.splice(newPosition,0,currChar); //at position newPosition remove 0 items and add currLetter
    }

    console.log(letters.join(''));
}

//when you submit the code into the Judge system, do not copy the code below!
solve(['Fun exam right']);

