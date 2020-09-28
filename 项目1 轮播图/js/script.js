// 设置全局变量(索引、计时器、banner对象、pics对象、数量)
var index = 0,  // 设置图片索引变量
    timer = null,  // 设置计时器变量
    banner = document.getElementById("banner"),  // 通过DOM获取banner轮播图对象
    pics = document.getElementById("banner").getElementsByTagName("a"),  // 通过DOM获取图片对象（数组）
    len = pics.length  // 设置图片数量

// 设置图片切换函数
function changeImg(){
    for(var i=0; i<len; i++){
        pics[i].className = "pic";  // 通过循环为每张图片设置CSS属性pic
    }
    pics[index].className = "pic picactive";
    // 为索引为index的图片设置CSS属性 pic picactive，即显示出来，在playimg函数中会随着循环递增
}

// 设置图片自动轮播函数
function playImg(){
    timer = setInterval(  // 间隔2s执行一次函数，函数功能即递增图片索引，当超过图片数量时重置为0
        function(){
            index++;
            if(index >= len){
                index = 0;
            }
            changeImg();  // 执行图片切换（在changeimg传入index值并修改css）
        },
    2000)  // 2000ms，即2s
}

// 设置图片停止轮播函数
function stopImg(){
    if(timer) {
        clearInterval(timer);  // 将计时器置空，此时图片索引不变，图片不切换
    }
}

// 设置主程序
function slideImg(){
    // 当banner区域鼠标滑入时，停止轮播
    banner.onmouseover = function(){
        stopImg()
    }
    // 当banner区域鼠标滑出时，开启轮播
    banner.onmouseout = function(){
        playImg()
    }
    // 默认鼠标滑出，开启轮播
    banner.onmouseout(); // 加括号的函数/方法，代表直接执行此函数
}

// 执行主程序
slideImg();