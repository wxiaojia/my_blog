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
});