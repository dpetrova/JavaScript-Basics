/**
 * Created by urukhai on 3/26/15.
 */
function solve(input){
    var str = input[0],
        regex = /[\d]+/g,
        digitStr = [],
        hex = [],
        resultStr = '',
        i;

    digitStr = str.match(regex);

    for (i  in digitStr) {
        hex[i] = parseInt(digitStr[i]).toString(16).toUpperCase();
        while(hex[i].length < 4){
            hex[i] = '0' + hex[i];
        }
        hex[i] = '0x' + hex[i];
    }

    resultStr = hex.join('-');

    console.log(resultStr);
}

solve(['5tffwj(//*7837xzc2---34rlxXP%$”.']);

solve(['482vMWo(*&^%$213;k!@41341((()&^>><///]42344p;e312']);

solve(['20']);
