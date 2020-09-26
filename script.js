$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
	});
	
});

/*gallery*/

$(document).ready(function(){
	$(".fancybox").fancybox({
		  openEffect: "none",
		  closeEffect: "none"
	  });
	  
	  $(".zoom").hover(function(){
		  
		  $(this).addClass('transition');
	  }, function(){
		  
		  $(this).removeClass('transition');
	  });
  });
