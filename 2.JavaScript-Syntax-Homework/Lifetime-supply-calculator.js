/**
 * Created by urukhai on 3/14/15.
 */
function calcSupply(age, maxAge, food, foodPerDay) {
    var years = maxAge - age;
    var totalAmount = years * 365 * foodPerDay;
    console.log(totalAmount + 'kg of ' + food + ' would be enough until I am ' + maxAge + ' years old.');
}

calcSupply(38, 118, 'chocolate', 0.5);
calcSupply(20, 87, 'fruits', 2);
calcSupply(16, 102, 'nuts', 1.1);