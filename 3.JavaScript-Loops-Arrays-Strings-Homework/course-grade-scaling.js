/**
 * Created by urukhai on 3/18/15.
 */
function gradeScale(array) {
    for (var i = 0; i < array.length; i++) {
        var student = array[i];
        student['score'] *= 1.1;
        student['score'] = Math.round(student['score'] * 10) / 10;
        if (student['score'] >= 100) {
            student['hasPassed'] = true;
        } else {
            student['hasPassed'] = false;
        }
    }
    var passedStudents = array.filter(function (student) {
        return student['hasPassed'] == true;
    });
    var sortedStudents = passedStudents.sort(function (a, b) {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
    });
    return sortedStudents;
}


console.log(gradeScale([
        {
            'name' : 'Пешо',
            'score' : 91
        },
        {
            'name' : 'Лилия',
            'score' : 290
        },
        {
            'name' : 'Алекс',
            'score' : 343
        },
        {
            'name' : 'Габриела',
            'score' : 400
        },
        {
            'name' : 'Жичка',
            'score' : 70
        }
    ]
));