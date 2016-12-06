$(document).ready(function() {
	 //回到顶部
    window.onscroll = function(){
        var clientHeight=$(window).height()
        var scrollTop = $(document).scrollTop();
        if(scrollTop>clientHeight){
            $("#btn").css({"display":"block"});
        }
        else{
            $("#btn").css({"display":"none"});
        }
    }
    $("#btn").on("click",function(e) {
        $("html,body").animate({scrollTop:0},300);    
    });
    $("#send").on("click",function(e){
       var textarea=$(".list_description textarea").val();
       $("#ping").append("<li>匿名："+textarea+"<li>");
       $(".list_description textarea").val("");
    })
});