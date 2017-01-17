
var app;

init = function () {
    "use strict"
    bio.display();
    education.display();
    projects.display();
    work.display();
};

init.toggle = function () {

    showNavElem = $("#show-nav-button");
    aboutMeElem = $("#about-me");
    landingElem = $(".landing");
    navElem = $(".nav");
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
    navElem.fadeOut();
    landingElem.click(function () {
        landingElem.addClass("flip");
        setTimeout(function () {
            landingElem.removeClass("flip");
            landingElem.hide();
        }, 1000);
        playSong.stop();
    });
    showNavElem.mouseover(function () {
        showNavElem.html("Menu");
    });
    showNavElem.click(function () {
        showNavElem.fadeOut();
        navElem.fadeIn();
    });
};

init();
init.toggle();
