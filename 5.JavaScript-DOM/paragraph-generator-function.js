/**
 * Created by urukhai on 3/28/15.
 */
function createParagraph(id, text){
    var node = document.createElement('p'); //Create a <p> node
    var textnode = document.createTextNode(text); //Create a text node
    node.appendChild(textnode); // Append the text to <p>
    document.getElementById(id).appendChild(node); // Append <p> to element with id="id"
}

