var inner = document.getElementById("inner");
var column = document.getElementById("column");
var clis = document.getElementById("column").getElementsByTagName("li");
var button = document.getElementById("button");

inner.onclick = function() {
    inner.style.border = "1px solid #FF6700";
    column.style.display = "block";
}

button.onclick = function() {
    column.style.display = "none";
}

for ( var i = 0; i < clis.length; i++ ) {
    clis[i].onmouseover = function () {
        this.style.backgroundColor = 'pink';
    }
    clis[i].onmouseout = function () {
        this.style.backgroundColor = "#ffffff";
    }
}