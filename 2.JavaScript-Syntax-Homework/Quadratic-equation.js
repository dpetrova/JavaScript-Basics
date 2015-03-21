/**
 * Created by urukhai on 3/14/15.
 */
function calcQuadraticEquation (a, b, c){
    var discriminant = b * b - 4 * a * c;
    var x1;
    var x2;
    if (discriminant > 0) {
        x1 = (-b - Math.sqrt(discriminant)) / (2 * a);
        x2 = (-b + Math.sqrt(discriminant)) / (2 * a);
        console.log('x1=' + x1 + ', x2=' + x2);
    } else if (discriminant == 0) {
        x1 = (-b) / (2 * a);
        console.log('x=' + x1);
    } else {
        console.log('no real roots');
    }
}

calcQuadraticEquation(2, 5, -3);
calcQuadraticEquation(2, -4, 2);
calcQuadraticEquation(4, 2, 1);