var items = document.getElementById("iditem").getElementsByTagName("li");
var boxs = document.getElementById("idbox").getElementsByTagName("li");

for ( var i = 0; i < items.length; i++ ) {
    items[i].index = i;   // 给每个li定义一个属性索引值
    for ( var j = 0; j < boxs.length; j++ ) {
        items[i].onmouseover = function () {
            this.style.backgroundColor = '#FF6700';
            boxs[this.index].style.display = 'block';
        }
        items[i].onmouseout = function () {
            this.style.backgroundColor = "skyblue";
            boxs[this.index].style.display = 'none';
        }
        boxs[j].onmouseover = function () {
            this.style.display = 'block';
        }
        boxs[j].onmouseout = function () {
            this.style.display = 'none';
        }
    }
}