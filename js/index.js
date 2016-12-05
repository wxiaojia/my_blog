$(document).ready(function() {
	init();
	$(".apart_left").on("click",function(e){
		$(".link_title a").css({"font-size":"16px"});
		$(".list_item").css({"padding-bottom":"9px","margin-bottom":"0"});
		$(".list_description").css({"display":"none"});
		$(".link_title").css({"float":"left","margin":"0"});

	}) 
	$(".apart_right").on("click",function(e){
		init();		
	})
	function init(){
		$(".link_title a").css({"font-size":"25px"});
		$(".list_item").css({"padding-bottom":"23px","margin-bottom":"30px"});
		$(".list_description").css({"display":"block"});
		$(".link_title").css({"float":"none","margin":"20px 0 0 30px"});
	}
});