
var app;

init = function () {
    "use strict"
    bio.display();
    education.display();
    projects.display();
    work.display();
};

$(window).resize(function () {
    viewportWidth = $(window).width();
    viewportHeight = $(window).height();
    if (viewportWidth < 1200) {
        playSong.stop();
    }
    if (viewportWidth > 1200) {
        playSong.play();
    }
});

init.toggle = function () {

    aboutMeElem = $("#about-me");
    landingElem = $(".landing");
    navElem = $("#nav");
    // Show hide flip toggle method for nav elements.
    projectsHeaderElem.click(function () {
        bttnShowProjectsElem.fadeIn();
        projectsElem.fadeOut();
    });

    bttnShowProjectsElem.click(function () {
        projectsElem.fadeIn();
        bttnShowProjectsElem.fadeOut();
    });

    workHeaderElem.click(function () {
        workExperienceElem.addClass("flip");
        bttnShowWorkElem.fadeIn();
        // Gives time for animation flip before collapsing the dom.
        setTimeout(function () {
            workExperienceElem.fadeOut();
        }, 1000);
    });

    bttnShowWorkElem.click(function () {
        workExperienceElem.removeClass("flip");
        workExperienceElem.fadeIn();
        bttnShowWorkElem.fadeOut();
    });

    educationHeaderElem.click(function () {
        educationElem.addClass("flip");
        bttnShowEducationElem.fadeIn();
        setTimeout(function () {
            educationElem.fadeOut();
        }, 1000);
    });

    bttnShowEducationElem.click(function () {
        educationElem.removeClass("flip");
        educationElem.fadeIn();
        bttnShowEducationElem.fadeOut();
    });

    landingElem.click(function () {
        landingElem.addClass("flip");
        setTimeout(function () {
            landingElem.removeClass("flip");
            landingElem.hide();
        }, 1000);
        navElem.fadeIn();
        playSong.stop();
    });
};

init();
init.toggle();
