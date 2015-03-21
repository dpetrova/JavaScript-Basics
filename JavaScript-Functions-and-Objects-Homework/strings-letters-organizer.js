 /**
 * Created by urukhai on 3/20/15.
 */
function sortLetters(string, boolean) {
     var strArray = string.split('');
     var sortedArray;
     if (boolean === true) {
         sortedArray = strArray.sort(function(x,y) {
             return x.toLowerCase() > y.toLowerCase();
         });
     } else {
         sortedArray = strArray.sort(function(x,y) {
             return x.toLowerCase() <= y.toLowerCase();
         });
     }
     console.log(strArray.join('').toString());
 }

 sortLetters('HelloWorld', true);
 sortLetters('HelloWorld', false);