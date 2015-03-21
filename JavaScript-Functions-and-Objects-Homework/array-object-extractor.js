/**
 * Created by urukhai on 3/20/15.
 */
function extractObjects(array) {
    //var objectArr = array.filter(function(obj) {
    //    return Object.prototype.toString.call(obj) === "[object Object]";
    //});
    //return objectArr;

    var objectArr= [];
    for (var i in array) {
        if(Object.prototype.toString.call(array[i]) === "[object Object]"){
            objectArr.push(array[i]);
        }
    }
    return objectArr;
}

console.log(extractObjects([
        "Pesho",
        4,
        4.21,
        { name : 'Valyo', age : 16 },
        { type : 'fish', model : 'zlatna ribka' },
        [1,2,3],
        "Gosho",
        { name : 'Penka', height: 1.65}
    ]
));