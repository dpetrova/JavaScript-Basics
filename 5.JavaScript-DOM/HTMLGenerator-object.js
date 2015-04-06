/**
 * Created by urukhai on 3/29/15.
 */
 window.HTMLGen = function() {
 }

    HTMLGen.createParagraph = function(id, text){
        var node = document.createElement('p'); //Create a <p> node
        var textnode = document.createTextNode(text); //Create a text node
        node.appendChild(textnode); // Append the text to <p>
        document.getElementById(id).appendChild(node); // Append <p> to element with id="id"
    }

    HTMLGen.createDiv = function(id, clas){
        var node = document.createElement('div'); //Create a <div> node
        var className = clas; // add a class='clas' for the node
        var textnode = document.createTextNode(className); //Create a text node
        node.appendChild(textnode); // Append the text to <div>
        document.getElementById(id).appendChild(node); // Append <div> to element with id="id"
    }

    HTMLGen.createLink = function (id, text, url){
        var node = document.createElement('a'); //Create a <a> node
        var textnode = document.createTextNode(text); //Create a text node
        node.appendChild(textnode); // Append the text to <a>
        node.href = url;
        document.getElementById(id).appendChild(node); // Append <a> to element with id="id"
    }
;

//може и така
//(function(){
//    var HTMLGen = {
//        createParagraph: function (id, text){
//            var paragraph = document.createElement('P');
//            var textValue = document.createTextNode(text);
//            paragraph.appendChild(textValue);
//            var parentElement = document.getElementById(id);
//            parentElement.appendChild(paragraph);
//        },
//        createDiv: function (id, classs){
//            var divElement = document.createElement('DIV');
//            divElement.className = classs;
//            var parentElement = document.getElementById(id);
//            parentElement.appendChild(divElement);
//        },
//        createLink: function (id, text, url){
//            var anchorElement = document.createElement('A');
//            anchorElement.href = url;
//            var textValue = document.createTextNode(text);
//            anchorElement.appendChild(textValue);
//            var parentElement = document.getElementById(id);
//            parentElement.appendChild(anchorElement);
//        }
//    };
//    HTMLGen.createParagraph('wrapper', 'SoftUni');
//    HTMLGen.createDiv('wrapper', 'section');
//    HTMLGen.createLink('book', 'C# basics book', 'http://www.introprogramming.info/')
//
//})();



