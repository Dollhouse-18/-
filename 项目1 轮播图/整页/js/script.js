// 设置全局变量(索引、计时器、banner对象、pics对象、数量)
var index = 0,
    timer = null,
    banner = document.getElementById("banner"),
    pics = document.getElementById("banner").getElementsByTagName("a"),
    len = pics.length

// 设置图片切换函数
function changeImg(){
    for(var i=0; i<len; i++){
        pics[i].className = "pic";
    }
    pics[index].className = "pic picactive";
}

// 设置图片自动轮播函数
function playImg(){
    timer = setInterval(
        function(){
            index++;
            if(index >= len){
                index = 0;
            }
            changeImg();
        },
    2000)
}

// 设置图片停止轮播函数
function stopImg(){
    if(timer) {
        clearInterval(timer);
    }
}

// 设置主程序
function slideImg(){
    // banner区域鼠标滑入效果
    banner.onmouseover = function(){
        stopImg()
    }
    // banner区域鼠标滑出效果
    banner.onmouseout = function(){
        playImg()
    }
    // 默认鼠标滑出
    banner.onmouseout();
}

// 执行主程序
slideImg();