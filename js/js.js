$(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
        $(".header").addClass("active");
    }
    else {
        //remove the background property so it comes transparent again (defined in your css)
        $(".header").removeClass("active");
    }
});
$(document).ready(function () {
    $(".btn-pref .btn").click(function () {
        $(".btn-pref .btn").removeClass("btn-primary").addClass("btn-default");
        // $(".tab").addClass("active"); // instead of this do the below 
        $(this).removeClass("btn-default").addClass("btn-primary");
    });
});