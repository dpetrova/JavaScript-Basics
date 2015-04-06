/**
 * Created by urukhai on 4/1/15.
 */
function solve(input){
    var text = input[0];
    // това ще мачне всичко, което е между <p> и <\p>, обяснение:
    // . --> match any character except line breaks
    // + --> match 1 or more of the preceding token
    // ? --> Lazy: makes the preceding quantifiers lazy, causing it to match as few characters as possible
    // \n --> match line feed character
    // * --> match 0 or more of the preceding token
    var regex = /<p>(.+?[\n]*)<\/p>/g;
    var matchedArr = [];
    var match = regex.exec(text); //връща масив, където на [0] стои мачнатото от целия израз; на [1] стои само мачнатото от групата; на [2] стои индекс; на [3] стои инпута, който сме подали
    while(match != null) {
        matchedArr.push(match[1]);
        match = regex.exec(text);
    }

    //replace all characters which are not small letters and numbers with a space
    var replaceRegex = /[A-Z\W]+/g;
    var multipleSpaceReg = /[ ]+/g;
    for (var i in matchedArr) {
       matchedArr[i] = matchedArr[i].replace(replaceRegex, ' ').replace(multipleSpaceReg, ' ');
    }

    //decrypt text: replace a-m with n-z and n-z with a-m
    var output = [];
    for (var i in matchedArr) {
        var decryptStr = '';
        for (var j in matchedArr[i]) {
            if(matchedArr[i].charCodeAt(j) >= 97 && matchedArr[i].charCodeAt(j) <= 109){
                var newCharCode = matchedArr[i].charCodeAt(j) + 13;
                var newLetter = String.fromCharCode(newCharCode);
                decryptStr += newLetter;
            } else if (matchedArr[i].charCodeAt(j) >= 110 && matchedArr[i].charCodeAt(j) <= 122){
                var newCharCode = matchedArr[i].charCodeAt(j) - 13;
                var newLetter = String.fromCharCode(newCharCode);
                decryptStr += newLetter;
            }else {
                var newLetter = ' ';
                decryptStr += newLetter;
            }
        }
        output.push(decryptStr);
    }

    console.log(output.join(''));

}

solve(['<html><head><title></title></head><body><h1>Intro</h1><ul><li>Item01</li><li>Item02</li><li>Item03</li></ul>' +
        '<p>jura qevivat va jrg fyvccrel fabjl</p><div><button>Click me, baby!</button></div><p> pbaqvgvbaf fabj  ' +
        'qpunvaf ner nofbyhgryl rffragvny sbe fnsr unaqyvat nygubhtu fabj punvaf znl ybbx </p><span>This manual is false,' +
        ' do not trust it! The illuminati wrote it down to trick you!</span><p>vagvzvqngvat gur onfvp vqrn vf ernyyl fvzcyr' +
        ' svg gurz bire lbhe gverf qevir sbejneq fybjyl naq gvtugra gurz hc va pbyq jrg</p><p> pbaqvgvbaf guvf vf rnfvre ' +
        'fnvq guna qbar ohg vs lbh chg ba lbhe gverf</p></body>']);