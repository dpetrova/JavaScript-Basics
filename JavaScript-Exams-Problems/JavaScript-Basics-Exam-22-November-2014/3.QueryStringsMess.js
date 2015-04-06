/**
 * Created by urukhai on 3/25/15.
 */
//в JS добра практика е всички променливи да се декларират най-отгоре
function solve(args){
    //това ще хване всичко, което не е =; &; ?; whitespace
    //т.е. ще имаме: дума(без тези символи)=дума(без тези символи)
    var regex = /([^=&?\s]+)=([^=&?\s]+)/g,
        whitespaceRegex = /(\+|%20)+/g, //мачва всички символи, които са + или %20
        lineIndex,
        currLine,
        lineObject,
        match,
        key,
        value,
        output,
        i;

    for (lineIndex in args) {
        currLine = args[lineIndex],
        lineObject = {};

        //exec() връща масив с първия match, който намери
        //в този масив на индекс [0] стои целия мачнат израз от regex-а,
        // а в следващите индекси [1], [2],.. стоят мачнатото по отделно от групите (в [1] мачнатото от 1-ва група; в [2] мачнатото от 2-ра група и т.н
        //за да ни мачне и върне всичко от в стринг (а не само първия match), трябва да извикаме exec() няколко пъти в цикъл
        //цикъла ще се върти докато exec() не върне null (това значи че повече нищо не може да мачне)

        match = regex.exec(currLine);
        while(match) {
            key = match[1].replace(whitespaceRegex, ' ').trim(); //за да махнем всички символи, които са + или %20 и да ги заменим с интервал
            value = match[2].replace(whitespaceRegex, ' ').trim();
            if(!lineObject[key]){ //ако нямам такъв ключ
                lineObject[key] = []; //създавам такъв ключ със стойност празен масив
            }
            lineObject[key].push(value);

            match = regex.exec(currLine);
        }

        output = '';
        for (var i in lineObject) {
            output += i + '=[' + lineObject[i].join(', ') + ']'; //i ми е ключът, а lineObject[i] ми е стойността
        }
        console.log(output);
    }

}

solve(['field=value1&field=value2&field=value3',
        'http://example.com/over/there?name=ferret'
    ]);