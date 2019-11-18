var lists = document.getElementById("nav-list").getElementsByTagName("li");
var divs = document.getElementById("nav-div").getElementsByTagName("li");

for ( var x = 0; x < lists.length; x++ ) {
    lists[x].index = x;  
    for ( var y = 0; y < divs.length; y++ ) {
        lists[x].onmouseover = function () {
            this.style.backgroundColor = '#FF6700';
            divs[this.index].style.display = 'block';
        }
        lists[x].onmouseout = function () {
            this.style.backgroundColor = "#444444";
            divs[this.index].style.display = 'none';
        }
        divs[y].onmouseover = function () {
            this.style.display = 'block';
        }
        divs[y].onmouseout = function () {
            this.style.display = 'none';
        }
    }
}



function $(names) {
    return document.getElementById(names);
  }
  var left = $('left'); //左按钮
  var right = $('right'); //右按钮
  var banner = document.getElementsByClassName('banner')[0];
  var li_list = document.querySelectorAll('#imgul li'); //获取图片的li
  var ol_list = document.querySelectorAll('ol li');  //获取按钮的li
  var timer = null; //声明定时器
  var count = 0;

  function auto() { //执行自动轮播
    count++;
    if (count > li_list.length - 1) {
      count = 0;
    }
    for (var i = 0; i < li_list.length; i++) {
      li_list[i].style = 'display:none;';
      ol_list[i].className = '';
    }
    li_list[count].style = 'display:block;'
    ol_list[count].className = 'active';

  }
  timer = setInterval(auto, 8000); //调用定时器

  left.onmouseover = function() {
    this.style.backgroundColor = "#777777";
    this.style.color = "#ffffff";
  }
  left.onmouseout = function() {
    this.style.backgroundColor = "rgba(0, 0, 0, 0)";
    this.style.color = "#B0B0B0";
  }
  right.onmouseover = function() {
    this.style.backgroundColor = "#777777";
    this.style.color = "#ffffff";
  }
  right.onmouseout = function() {
    this.style.backgroundColor = "rgba(0, 0, 0, 0)";
    this.style.color = "#B0B0B0";
  }
  
  // 点击右侧，切换下一个
  right.onclick = function () {
    auto();
  }
  // 点击左侧，切换上一个
  left.onclick = function () {
    count--;
    if (count < 0) {
      count = li_list.length - 1;
    }
    console.log(count);
    for (var i = 0; i < li_list.length; i++) {
      li_list[i].style = 'display:none;';
      ol_list[i].className = '';
    }
    li_list[count].style = 'display:block;';
    ol_list[count].className = 'active';
  }

  banner.onmouseover = function () { //鼠标划上去，停止轮播
    clearInterval(timer);
  }
  banner.onmouseout = function () { //鼠标划出，继续轮播
    timer = setInterval(auto, 1000); //调用定时器
  }


  //点击小按钮，切换图片
  for (var j = 0; j < ol_list.length; j++) {
    ol_list[j].ind = j; //为每个小按钮添加下标
    ol_list[j].onclick = function () { //进入点击事件
      for (var i = 0; i < li_list.length; i++) { //干掉所有人
        li_list[i].style = 'display:none;';
        ol_list[i].className = '';
      }
      li_list[this.ind].style = 'display:block;'; //留下我自己
      ol_list[this.ind].className = 'active'; //留下我自己
      count = this.ind; // 把当前的角标值赋值给count 希望他从当前再开始
    }
  }