$("#btn").click(function(){
  $("#trg").slideToggle();
});


$(document).ready(function() {
    $(".webapp").click(function() {
        $('html, body').animate({
            scrollTop: $("#webapp").offset().top
        }, 800);
    });
});

$(document).ready(function() {
    $(".mobileapp").click(function() {
        $('html, body').animate({
            scrollTop: $("#mobileapp").offset().top
        }, 800);
    });
});
$(document).ready(function() {
    $(".devops").click(function() {
        $('html, body').animate({
            scrollTop: $("#devops").offset().top
        }, 800);
    });
});

$(document).ready(function() {
    $(".clients").click(function() {
        $('html, body').animate({
            scrollTop: $("#clients").offset().top
        }, 800);
    });
});

$(document).ready(function() {
    $(".about").click(function() {
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 800);
    });
});
