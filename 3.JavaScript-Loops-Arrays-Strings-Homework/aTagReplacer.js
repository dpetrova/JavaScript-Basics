/**
 * Created by urukhai on 3/18/15.
 */
function replaceATag(str)  {
    var re = /<a([\w\W]*)>([\w\W]*)<\/a>/gi;
    return str.replace(re, '[URL $1]$2[/URL]');
}

console.log(replaceATag('<ul>\n <li>\n  <a href=http://softuni.bg>SoftUni</a>\n </li>\n</ul>'));
