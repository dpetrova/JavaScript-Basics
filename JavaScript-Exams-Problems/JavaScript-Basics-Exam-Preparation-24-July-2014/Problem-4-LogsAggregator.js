//идеята е да имаме вложен асоциативен масив: в големия като key имаме user, а като value вложен масив с key ip и value minutes
//        key               value
//        user          key     value
//                      ip      minutes

function solve (input){

    //processing the data
    var n = input[0]; //броя на редовете
    var assArr = {}; //създаваме си главния асоциативен масив (обект), където ще пълним входящите данни
    //var count;
    for (var i = 1; i <= n; i++) {
        var tempRow = input[i].split(' '); //сплитваме всеки един от редовете, които са следващите елементи в масива input и получаваме друг масив
        var ip = tempRow[0];
        var user = tempRow[1];
        var minute = parseInt(tempRow[2]);

        if (!(user in assArr)) { //проверяваме в главния масив дали имаме такъв user (така се проверява за ключ в обект) и ако нямаме:
            assArr[user] = {}; //го добавяме като нов асоциативен масив (обект)
            assArr[user][ip] = minute; //и в него слагаме key ip и value minutes
        } else if ((user in assArr)&& !(ip in assArr[user])) { //ако имаме такъв key user, но в него нямаме такъв key ip:
            assArr[user][ip] = minute; // в него слагаме key ip и value minutes
        } else { //това означаве, че иаме key user с даденото key ip и value minutes
            assArr[user][ip] += minute; //към вече съществуващите минути (така извикваме вече съществуващите (assArr[user][ip]) добавяме и присвояваме новите
            //minute = minute + assArr[user][ip]; //събираме минутите към вече съществуващите (така извикваме вече съществуващите (assArr[user][ip])
            //assArr[user][ip] = minute; //присвояваме ъпдейтнатите минути
        }
    }

    //printing the output
    //тук не се сортира автоматично, а за да се сортира, трябва в отделен масив да си извадим key-вете и да ги сортираме
    //и след това обхождаме тези сортирани key-ве в масива и по тях викаме от асоциативния масив
    var userKeys = []; //създаваме масив с key-вете user
    for(var keyUser in assArr) {
        if (assArr.hasOwnProperty(keyUser)) { //ако масива assArr има ключ(property) keyUser:
            userKeys.push(keyUser); //го добави към масива userKeys
        }
    }
    userKeys.sort(); //сортираме масива с ключовете userKeys

    var output = '';
    for (var i = 0; i < userKeys.length; i++) {
        var sumMinutes = 0;
        var keysUsersIp = []; //правим нов масив с ключовете IР
        for(var innerKey in assArr[userKeys[i]]) {
            if (assArr[userKeys[i]].hasOwnProperty(innerKey)) {
                keysUsersIp.push(innerKey);
                sumMinutes += assArr[userKeys[i]][innerKey];
            }
        }
        output += userKeys[i] + ': ' + sumMinutes + ' [' + keysUsersIp.sort().join(', ') + ']\n';
    }
    console.log(output);
}

//when you submit the code into the Judge system, do not copy the code below!
solve (['7',
    '192.168.0.11 peter 33',
    '10.10.17.33 alex 12',
    '10.10.17.35 peter 30',
    '10.10.17.34 peter 120',
    '10.10.17.34 peter 120',
    '212.50.118.81 alex 46',
    '212.50.118.81 alex 4'
])
