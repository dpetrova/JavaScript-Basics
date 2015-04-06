function solve (input) { //input-a винаги се подава като array (в случая е array само с един елемент input[0])
    var words = input[0].split(/[^a-zA-Z]+/); //сплитваме по всичко, което не е латинска буква
    //words = words.filter(Boolean); //филтрира по true/false, т.е. ако имаме празен стринг, той ще го махне защото е false
    words = words.filter(function(w) {return w !== '';});
    var output = [];
    for (var a = 0; a < words.length; a++) {
        for (var b = 0; b < words.length; b++) {
            for (var c = 0; c < words.length; c++) {
                // Check if a!=b and a|b=c
                if (b !== a) { //да не вземаме едновременно един и същи елемент от масива (един и същи индекс)
                    var check = (words[a] + words[b]) === (words[c]);
                    var check02 = words[a]!=='' && words[b]!=='' && words[c]!==''
                    if (check && check02) {
                        var cognateWord = words[a] + "|" + words[b] + "=" + words[c];
                        if (output.indexOf(cognateWord) < 0) { //за да не се повтарят думите правим проверка дали тази дума вече я няма в масива; ако я няма indexOf връща -1; ако я има връща индекса на който се намира
                            output.push(cognateWord);
                        }
                    }
                }
            }
        }
    }

    if (output.length < 1) { //масива е празен (няма намерени думи)
        return "No";
    }
    else {
        return output.join('\n'); //така ще ни дава всяка отделна дума на нов ред (т.е. ще ги съедини с нов ред); join маха скобите от масива и добавя само сепаратора
    }
}

//when you submit the code into the Judge system, do not copy the code below!
console.log(solve (['Uni(lo,.ve=I love SoftUni (Soft)']));