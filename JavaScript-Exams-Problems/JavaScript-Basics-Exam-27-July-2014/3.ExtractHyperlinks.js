/**
 * Created by urukhai on 4/2/15.
 */
function extractHyperlinks(input){

    // <a\s+ мачва <a и 1 или повече whitespace
    // ([^>]+\s+)? мачва 1 или повече символи, които не са >, и след това 1 или повече whitespace  като всичко това е Lazy (т.е. ще мачне само пърцото което срещне)
    // href\s*=\s* мачва думата href, след това 0 или повече whitespace, след това = , след това 0 или повече whitespace
    // '([^']*)'| мачва ' , след това в група 0 или повече символи, които не са ', след това ' или
    // "([^"]*)"| мачва " , след това в група 0 или повече символи, които не са ", след това "  или
    // ([^\s>]+) мачва 1 или повече [символи, които не са whitespace  и >]
    // [^>]*> мачва 0 или повече символи, които не са >, и след това >
    var regex = /<a\s+([^>]+\s+)?href\s*=\s*('([^']*)'|"([^"]*)"|([^\s>]+))[^>]*>/g;
    var matched;
    while(matched = regex.exec(input.join('\n'))){
        var hrefValue = matched[3];
        if(hrefValue == undefined){
            hrefValue = matched[4];
        }
        if(hrefValue == undefined){
            hrefValue = matched[5];
        }
        console.log(hrefValue);
    }


}

extractHyperlinks(['<a href="http://softuni.bg" class="new"></a>']);

extractHyperlinks(['<p>This text has no links</p>']);
