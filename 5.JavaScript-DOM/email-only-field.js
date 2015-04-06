/**
 * Created by urukhai on 3/28/15.
 */
function checkEmail(){
    var input = document.getElementById('input').value;
    var output = document.getElementById('output');
    output.innerHTML = input;
    var pattern = /[-0-9a-zA-Z.+_]+@[-0-9a-zA-Z.+_]+\.[a-zA-Z]{2,4}/;
    if(!pattern.test(input)){
        output.style.backgroundColor = "red";
    } else {
        output.style.backgroundColor = "lightgreen";
    }
}