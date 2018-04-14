//显示器宽度
var w=$(window).width();

$(function(){

//识别cookie

if($.cookie("page_num") ==null){
    $.cookie("page_num", "0", { expires: 7 });
}else{
    if($.cookie("page_num")>0){
        $("#whole").css("margin-left",-w*$.cookie("page_num"));
    }else{
        $("#whole").css("margin-left",0);
    }
}


//初始化

$("#whole").width(w*3);
$(".main").width(w);
$("#whole").css({"transition": "all 1s",});

})


function change_page(num,onum) {
    $.cookie("page_num", num, { expires: 7 });
    $.cookie("page_"+(onum), $(".main").eq(onum).scrollTop());
    $(".main").width(w-100).css({
        "height":"80%",
        "margin-left":"20px",
        "box-shadow": "5px 5px 15px #c2c2c2",
        "font-size": "80%",
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
            "font-size": "100%",
        });
        $("#whole").css("margin-left",-w*num);
        $(".main").eq(num).animate({scrollTop:$.cookie("page_"+num)},1000);/*在这里更改切换速度，除了这里，你还需要到CSS文件中更改相应参数*/
    },1000)/*在这里更改切换速度，除了这里，你还需要到CSS文件中更改相应参数*/
}