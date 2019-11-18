var nlists = document.getElementById("tab-nav").getElementsByTagName("li");
var clists = document.getElementById("tab-content").getElementsByTagName("li");

for ( var i = 0; i < nlists.length; i++ ) {
    nlists[i].index = i;
    for ( var j = 0; j < clists.length; j++) {
        nlists[i].onmouseover = function() {
            this.style.backgroundColor = "orange";
            clists[this.index].style.display = "block";
        }
        nlists[i].onmouseout = function() {
            this.style.backgroundColor = "pink";
            clists[this.index].style.display = "none";
        }
        clists[j].onmouseover = function () {
            this.style.display = 'block';
        }
        clists[j].onmouseout = function () {
            this.style.display = 'none';
        }
    }
}