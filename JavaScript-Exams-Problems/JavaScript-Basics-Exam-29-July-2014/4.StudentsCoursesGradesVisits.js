/**
 * Created by urukhai on 3/22/15.
 */
function solve(input) {
    //така можем да проверяваме какъв иска да ни бъде output-a: хващаме един output от тестовете, слагаме го в кавички като стринг и го парсваме с JSON.parse('output')
    //console.log(JSON.parse('{"C#":{"avgGrade":4.61,"avgVisits":5.5,"students":["Ivan Petrov","Maria Ivanova","Peter Nikolov"]},"Java":{"avgGrade":5.92,"avgVisits":8,"students":["Maria Ivanova","Peter Nikolov"]},"PHP":{"avgGrade":3.87,"avgVisits":4,"students":["Ivan Petrov","Peter Nikolov"]}}'
    //));

    var courses = {};
    for (var i = 0; i < input.length; i++) {
        var currLine = input[i].split(/[\s]?\|[\s]?/g); //сплитваме по празно място и '|', като трябва да ескейпнем всеки един от символите с '\'; ? означава 0 или 1 символа
        //може да се ползва и регулярен израз, като израза за всеки отделен елемент е ограден в скоби, и разделен с или '|'
        // във втория допълнително слагаме и '#', за да хване С#, и всеки символ (. s d) трябва да се ескейпнат защото са специални символи с определено значение
        //var currLine = input[i].match(/([a-zA-Z]+\s+[a-zA-Z]+)|([a-zA-Z#]+)|(\d+\.\d+)|(\d+)/g);
        var name = currLine[0].trim();
        var course = currLine[1].trim();
        var grade = Number(currLine[2].trim());
        var visits = Number(currLine[3].trim());

        if(!courses[course]) { //ако в масива courses не съществува свойството(ключ) 'course'
            courses[course] = {'avgGrade': 0, 'avgVisits': 0, 'students': [], 'countInputs': 0}; //дефинирай го и  му задай следния асоциативен масив
        }
        courses[course]['avgGrade'] += grade;
        courses[course]['avgVisits'] += visits;
        courses[course]['countInputs']++;
        if (courses[course]['students'].indexOf(name) == -1) { //ако съответното име го има в масива от студенти ще върне индекса където се намира; ако го няма ще върне -1
            courses[course]['students'].push(name);
        }
    }

    // вадим всички ключове в отделен масив, за да можем да ги сортираме:
    var courseKeys = Object.keys(courses);
    courseKeys.sort();
    //понеже този масив е отделен от този който имаме с данните, трябва да copy/paste целия асоциативен масив
    var outputArr = {};
    for (var i = 0; i < courseKeys.length; i++) {
        var currCourse = courseKeys[i]; //C#, Java, PHP
        outputArr[currCourse] = courses[currCourse];
        outputArr[currCourse].students.sort(); //сортира студентите на текущия курс; outputArr[currCourse].students e все едно outputArr[currCourse]['students']
        //изчисляваме средната оценка
        outputArr[currCourse].avgGrade =  Number((outputArr[currCourse].avgGrade / outputArr[currCourse].countInputs).toFixed(2));
        //изчисляваме средния брой посещения
        outputArr[currCourse].avgVisits =  Number((outputArr[currCourse].avgVisits / outputArr[currCourse].countInputs).toFixed(2));
        //изтриваме допълнителното поле countInputs,  които ни трябваха само, за да изчислим средните оценки и посещения
        delete outputArr[currCourse].countInputs;
    }


console.log(JSON.stringify(outputArr));
}

solve([ '   Peter Nikolov | PHP      | 5.50 | 8',
        'Maria Ivanova | Java | 5.83 | 7',
        'Ivan Petrov   | PHP  | 3.00 | 2',
        'Ivan Petrov   | C#   | 3.00 | 2',
        'Peter Nikolov | C#   | 5.50 | 8',
        'Maria Ivanova | C#   | 5.83 | 7',
        'Ivan Petrov   | C#   | 4.12 | 5',
        'Ivan Petrov   | PHP  | 3.10 | 2',
        'Peter Nikolov | Java | 6.00 | 9']);