$(document).ready(function () {
    $(".a").click(function () {
        $(".b").slideToggle();
    });
});

$(window).resize(function () {
    if (window.innerWidth <= 768) {
        $(".b").hide();
    } else { 
        $(".b").show(); 
    }
});

$(document).ready(function(){
    $(".prev").click(function(){
        $(".slide li:last").prependTo(".slide");
        $(".slide").css("margin-left", "-100%");
        $(".slide").stop().animate({marginLeft:0}, 800);
    });

    $(".next").click(function(){
        $(".slide").stop().animate({marginLeft: "-100%"}, 800, function(){
            $(".slide li:first").appendTo(".slide");
            $(".slide").css({marginLeft:0});
        });
    });
});