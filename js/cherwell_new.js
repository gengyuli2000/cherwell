$(document).ready(function(){
	/set height to device height/
    $(".contentContainer").css("min-height",$(window).height());

    /smooth scrolls to anchor tag/
    $('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top-$(".navbar").height()
    }, 500);
    return false;
	});

});
