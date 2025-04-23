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