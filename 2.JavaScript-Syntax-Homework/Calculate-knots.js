/**
 * Created by urukhai on 3/14/15.
 */
function calcKnots (kmPerHour) {
    var knots = kmPerHour / 1.852;
    console.log(knots.toFixed(2));
}

calcKnots(20);
calcKnots(112);
calcKnots(400);