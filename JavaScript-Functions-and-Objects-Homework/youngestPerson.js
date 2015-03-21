/**
 * Created by urukhai on 3/21/15.
 */
function findYoungestPerson(array) {
    //var minAge = Number.MAX_VALUE;
    //var youngest;
    //for (var i in array) {
    //    var person = array[i];
    //    if(person.age < minAge && person.hasSmartphone === true){
    //        minAge = person.age;
    //        youngest = person;
    //    }
    //}

    //console.log('The youngest person is ' + youngest.firstname + ' ' + youngest.lastname);

    array = array.filter(function(person) {return person.hasSmartphone === true;}).sort(function(firstPerson, secondPerson){
        return firstPerson.age > secondPerson.age;
    });

    console.log('The youngest person is ' + array[0].firstname + ' ' + array[0].lastname);



}



var people = [
    { firstname : 'George', lastname: 'Kolev', age: 32, hasSmartphone: false },
    { firstname : 'Vasil', lastname: 'Kovachev', age: 40, hasSmartphone: true },
    { firstname : 'Bay', lastname: 'Ivan', age: 81, hasSmartphone: true },
    { firstname : 'Baba', lastname: 'Ginka', age: 40, hasSmartphone: false }];

findYoungestPerson(people);