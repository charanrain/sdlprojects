function planning_w() {
	//Top_line size
	var count_li = jQuery('.top_line ul li').length;
	
	var nav_w = jQuery('.top_line ul').width();
	var nav_w_li = nav_w/(count_li);
	
	jQuery('.top_line ul li').css('width', nav_w_li + 'px');
	
	//Color_line size
	var count_li = jQuery('.color_line ul li').length;
	
	var nav_w = jQuery('.color_line ul').width();
	var nav_w_li = nav_w/(count_li);
	
	jQuery('.color_line ul li').css('width', nav_w_li + 'px');
	
	//Planning size
	var count_li = jQuery('.fist_line_planning a').length;
	
	var nav_w = jQuery('.fist_line_planning').width();
	var nav_w_li = nav_w/(count_li);
	
	jQuery('.fist_line_planning a').css('width', nav_w_li + 'px');
	
	
}


jQuery(window).bind('resize',function() {
	
	//Service size
	planning_w();
	
});

$(document).ready(function(){
	//build dropdown
	$("<select />").appendTo("nav#main_menu div");
	
	// Create default option "Go to..."
	$("<option />", {
	   "selected": "selected",
	   "value"   : "",
	   "text"    : "Please choose page"
	}).appendTo("nav#main_menu select");	
	
	// Populate dropdowns with the first menu items
	$("nav#main_menu li a").each(function() {
	 	var el = $(this);
	 	$("<option />", {
	     	"value"   : el.attr("href"),
	    	"text"    : el.text()
	 	}).appendTo("nav#main_menu select");
	});
	
	//make responsive dropdown menu actually work			
  	$("nav#main_menu select").change(function() {
    	window.location = $(this).find("option:selected").val();
  	});
	
	//Iframe transparent
	$("iframe").each(function(){
		var ifr_source = $(this).attr('src');
		var wmode = "wmode=transparent";
		if(ifr_source.indexOf('?') != -1) {
		var getQString = ifr_source.split('?');
		var oldString = getQString[1];
		var newString = getQString[0];
		$(this).attr('src',newString+'?'+wmode+'&'+oldString);
		}
		else $(this).attr('src',ifr_source+'?'+wmode);
	});
			
	//Twitter Setup
	$('.tweet_module').tweet({
		modpath: 'twitter/',
		count: 2,
		username : 'templatesmint'
	 });
	
	//PrettyPhoto
	$("a[rel^='prettyPhoto']").prettyPhoto();
	
	//Image hover
	$(".proj_block, .post_img, .post").live('mouseover',function(){
			var info=$(this).find("img");
			info.stop().animate({opacity:0.5},400);
			$(".preloader").css({'background':'none'});
		}
	);
	$(".proj_block, .post_img, .post").live('mouseout',function(){
			var info=$(this).find("img");
			info.stop().animate({opacity:1},400);
			$(".preloader").css({'background':'none'});
		}
	);
	
	
	//Service size
	planning_w();
	
	
	

});




