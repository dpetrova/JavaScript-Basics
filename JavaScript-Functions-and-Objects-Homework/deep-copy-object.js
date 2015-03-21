/**
 * Created by urukhai on 3/21/15.
 */
function clone(obj) {
    var objCopy = JSON.parse(JSON.stringify(obj));
    return objCopy;
}

function compareObjects(obj, objCopy) {
    var isEqual = obj == objCopy;
    console.log('a == b --> ' + isEqual);
}

var a = {name: 'Pesho', age: 21}
var b = clone(a); // a deep copy
compareObjects(a, b);

var a = {name: 'Pesho', age: 21} ;
var b = a; // not a deep copy
compareObjects(a, b);
