//显示器宽度
var w=$(window).width();

$(function(){

//初始化

$("#whole").width(w*3);
$(".main").width(w);


})


function change_page(num) {
    $(".main").width(w-100).css({
        "height":"80%",
        "margin-left":"20px",
        "box-shadow": "5px 5px 15px #c2c2c2",
    });
    if(num>0){
        $("#whole").css("margin-left",-w*num+num*110);
    }else{
        $("#whole").css("margin-left",0);
    }
    setTimeout(function(){
        $(".main").width(w).css({
            "height":"100%",
            "margin-left":"0px",
            "box-shadow": "none",
        });
        $("#whole").css("margin-left",-w*num);
    },1000)
}