/**
 * Created by urukhai on 3/14/15.
 */
function calcExpression () {
    var input = document.getElementById('input').value;
    var output = eval(input);
    document.getElementById('result').innerHTML = output;
}