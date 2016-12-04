$(document).ready(function() {
	$(".subItem").css({"display":"none"});
	var flag=0;
	$(".lists_r").append("<i class='fa fa-chevron-down' aria-hidden='true'></i>");
	$(".lists_r").on("click",function(e){
		if(flag==0){
			$(".subItem").css({"display":"block"});
			flag=1;
			$(".fa-chevron-down").remove();
			$(".lists_r").append("<i class='fa fa-chevron-up' aria-hidden='true'></i>");
		}
		else{
			$(".subItem").css({"display":"none"});
			flag=0;
			$(".fa-chevron-up").remove();
			$(".lists_r").append("<i class='fa fa-chevron-down' aria-hidden='true'></i>");
		}
	})
});