$(document).ready(function(){
console.log("bb")
//--------------Mobile Orientation--------------//
	mobile_resize();
	$(window).resize(function(){
		mobile_resize();
	});


function mobile_resize(){
	if ($(window).width() < 660 || $(window).width() < $(window).height()){
		$("header").width("90%");
		$("#main_body").width("50%");
		console.log("mobile")
	}
	else{
		$("header").width("45%");
		$("#main_body").width("40%");
		console.log("dekstop")
	};
	
};






})
