 function limitText(){
    'use strict';
    var limitedText;
    var originalText = document.getElementById('comments').value;
    var lastSpace = originalText.lastIndexOf('',100);
    limitedText=originalText.slice(0,lastSpace);
//Showing the user How many characteres he entered
    document.getElementById('count').value=originalText.length;
//Displayin the limited text to user
    document.getElementById('result').value=limitedText;
    return false;
}
function init(){
    'use strict';
    document.getElementById('calcForm').onsubmit = limitText;
}
window.onload=init;