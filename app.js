
//Smooth Scrolling
$("#homeButton").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#home").offset().top - 63
    }, 2000);
});

$("#aboutMeButton").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#aboutMe").offset().top - 63
    }, 2000);
});

$("#myProjectsButton").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#myProjects").offset().top - 63
    }, 2000);
});

$("#contactMeButton").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#contactMe").offset().top - 63
    }, 2000);
});

$("#backToTopButton").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#home").offset().top - 63
    }, 2000);
});

//end smooth scrollTop
