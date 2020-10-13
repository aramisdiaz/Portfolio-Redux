$(document).ready(function () {


    $(window).scroll(function () {
        if ($(document).scrollTop() > 0) {
            $('.nav').addClass('affix');
        } else {
            $('.nav').removeClass('affix');
        }
    });


    $('.navTrigger').click(function () {
        $(this).toggleClass('active');
        $("#mainListDiv").toggleClass("show_list");
        $("#mainListDiv").fadeIn();

    });

   
    
    $(".navItem").click(function() {
        $("#mainListDiv").removeClass("show_list");
        $(".navTrigger").removeClass("active");
    })


    $(".navItem").click(function() {
        $("a.active").removeClass("active")
        $(this).addClass("active")
    })


    $("#about-btn").click(function () {
        $('html,body').animate({
            scrollTop: $("#about-div").offset().top - 95
        },'slow');
        
    });

    $("#down-btn").click(function () {
        $('html,body').animate({
            scrollTop: $("#about-div").offset().top - 95
        },'slow');
        
    });

    $("#project-btn").click(function () {
        $('html,body').animate({
            scrollTop: $("#projects-div").offset().top - 95
        },'slow');
    });

    $("#connect-btn").click(function () {
        $('html,body').animate({
            scrollTop: $("#connect-div").offset().top - 80
        },'slow');
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() + $(window).height() == $(document).height()) {
            $('footer').slideDown(300);
        } else {
            $('footer').slideUp(300);
        }
    });
    $(window).scroll(function() {
        if ($(window).scrollTop() < 600) {
            $('#about-btn').removeClass("active");
        }
        if($(window).scrollTop() > 600) {

            $('#about-btn').addClass("active");
            $('#project-btn').removeClass("active");
        }
        if ($(window).scrollTop() > 1100) {
            $('#about-btn').removeClass("active");
            $('#project-btn').addClass("active");
        }
        if ($(window).scrollTop() > 2675) {
            $('#project-btn').removeClass("active");
            $('#connect-btn').addClass("active");
        }
        if ($(window).scrollTop() < 2675) {
            $('#connect-btn').removeClass("active");
        }
    })
    

})