/**
 * Created by urukhai on 3/11/15.
 */
function calcCircleArea(radius) {
    var radius = document.getElementById('input-radius').value;
    var area = Math.PI * radius * radius;
    document.getElementById('output').innerHTML = area;
}