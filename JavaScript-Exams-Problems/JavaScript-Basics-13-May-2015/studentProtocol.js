/**
 * Created by Daniela on 13/05/2015.
 */

function studentProtocol(input){
    var result = {};
    for (var index in input) {
        var line = input[index].split(/[\-\:]/g);
        var object = line[1].trim();
        if (!result[object]) {
            result[object] = [];
        }
        var name = line[0].trim();
        var score = Number(line[2].trim());
        if (score >= 0 && score <= 400) {
            if (contains(result[object], {'name': name, 'result': score, 'makeUpExams': 0}){
                 var student = {'name': name, 'result': score, 'makeUpExams': 0};
                    //    result[object].push(student);
                    //}
                }
            console.log(result);
        }
    }

    function contains(a, obj) {
        var i = a.length;
        while (i--) {
            if (a[i] === obj) {
                return true;
            }
        }
        return false;
    }

    //console.log(result);
    //console.log(JSON.stringify(result));

}

studentProtocol(['Peter Jackson - Java : 350',
                    'Jane - JavaScript : 200',
                    'Jane     -    JavaScript :     400',
                    'Simon Cowell - PHP : 100',
                    'Simon Cowell-PHP: 500',
                    'Simon Cowell - PHP : 200']);