/**
 * Created by urukhai on 3/18/15.
 * this code is not my personal solution, it is taken from  aslv1's solutions
 */
function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

var people = [];
people.push(new Person("Scott", "Guthrie", 38));
people.push(new Person("Scott", "Johns", 36));
people.push(new Person("Scott", "Hanselman", 39));
people.push(new Person("Jesse", "Johns", 57));
people.push(new Person("Jon", "Skeet", 38));

Person.prototype.toString = function toString() {
    return this.firstName + ' ' + this.lastName + '(age ' + this.age + ')';
};

function groupBy(array, property) {
    var result = {};
    var person;
    for (i in array) {
        person = array[i];
        if (!(property in person)) {
            continue;
        }
        if (person[property] in result) {
            result[person[property]].push(person.toString());
        }
        else {
            result[person[property]] = [person.toString()];
        }
    }
    return result;
}

console.log(groupBy(people, 'firstName'));
console.log();
console.log(groupBy(people, 'age'));
console.log();
console.log(groupBy(people, 'lastName'));