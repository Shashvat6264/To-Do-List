const table = document.getElementById("tod");
const input = document.getElementById("input");

function addtodo(){
    var x = input.value;
    if (x != ""){
        var tr = document.createElement("tr");
        var node = document.createTextNode(x);
        
        var td0 = document.createElement("td");
        var img = document.createElement("img");
        img.src = 'css/img/circle-li.png';
        td0.className = "to";
        td0.appendChild(img);
        td0.onclick = function() {star(this.parentNode)};
        
        var td1 = document.createElement("td");
        td1.appendChild(node);
        td1.onclick = function() {changeclass(this.parentNode)};
        td1.className = "todo";

        var td2 = document.createElement("td");
        var button = document.createElement("button");
        var node_button = document.createTextNode("Upgrade");
        button.appendChild(node_button);
        td2.appendChild(button);
        td2.className = "but";
        button.onclick = function() {upgrade(this.parentNode.parentNode)};
    
        tr.appendChild(td0);
        tr.appendChild(td1);
        tr.appendChild(td2);
        table.appendChild(tr);
    }
    input.value = "";
}

function changeclass(elmnt){
    nel = elmnt.childNodes[1];
    nel.className = "done";
    nel.onclick = function() {changetype(this.parentNode)};
    var chan = elmnt.childNodes[0];
    chan.childNodes[0].src = 'css/img/tick-li.png';
    chan.onclick = function() {declass(elmnt)};
}

function changetype(elmnt){
    fadeout(elmnt);
    elmnt.remove()
}

function upgrade(elmnt){
    var text = elmnt.childNodes[1];
    input.value = text.childNodes[0].nodeValue;
    var sub = document.getElementById("submit");
    sub.onclick = function() {change(elmnt)};
}

function change(elmnt){
    var x = input.value;
    if (x != ""){
        elmnt.childNodes[1].childNodes[0].nodeValue = x;
    }
    var sub = document.getElementById("submit");
    input.value = "";
    sub.onclick = function() {addtodo()};
    var text = elmnt.childNodes[1];
    text.className = "todo";
    text.onclick = function() {changeclass(elmnt)};
    var chan = elmnt.childNodes[0];
    chan.childNodes[0].src = "css/img/circle-li.png";
}

function star(elmnt){
    if (elmnt.childNodes[1].className != "done"){
        var td0 = elmnt.childNodes[0];
        td0.childNodes[0].src = 'css/img/star-li.png';
        td0.onclick = function() {destar(elmnt)};
    }
}

function destar(elmnt){
    if (elmnt.childNodes[1].className != "done"){
        var td0 = elmnt.childNodes[0];
        td0.childNodes[0].src = 'css/img/circle-li.png';
        td0.onclick = function() {star(elmnt)};
    }
}

function declass(elmnt){
    nel = elmnt.childNodes[1];
    nel.className = "todo";
    nel.onclick = function() {changeclass(elmnt)};
    var chan = elmnt.childNodes[0];
    chan.childNodes[0].src = 'css/img/circle-li.png';
    chan.onclick = function() {star(elmnt)};
}
function fadeout(elmnt){
    var op = 1;
    var id = setInterval(frame, 5);
    function frame(){
        if (op == 0){
            clearInterval(id);
        }
        else{
            elmnt.style.opacity = op;
            op -= 0.2;
        }
    }
}