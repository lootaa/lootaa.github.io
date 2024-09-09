$(document).ready(function(){	
	    $(function () {
	        $(window).scroll(function(){
	            if ($(window).scrollTop()>200){
	                $("#gotops").fadeIn(400);
	            }
	            else
	            {
	                $("#gotops").fadeOut(400);
	            }
	        });
	        $("#gotops").click(function(){
	            $('body,html').animate({scrollTop:0},400);
	            return false;
	        });
	    });
	});



