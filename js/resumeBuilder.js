// ------------------------------------ vars --------------------------------
var index_zero = 0;
var index_one = 1;
var playSong;
var Sound;
var viewportWidth;
var viewportHeight;
playSong = new Sound("sound/menu-track.mp3");
$("#test-suite").hide();

$(window).resize(function() {
    viewportWidth = $(window).width();
    viewportHeight = $(window).height();
    if (viewportWidth < 1200) {
        playSong.stop();
    }
    if (viewportWidth > 1200) {
        playSong.play();
    }
});

var init = function() {
            // error handler to test if bio is defined.
    try {
        bio;
         } catch(e) {
            $("#test-suite").show();
            $("#test-suite").append('<h4>Bio is defined ---> Failed!</h4>');
        }
    bio.display = function() {

        formattedBioName = HTMLcontactGeneric.replace("%data%", bio.name);
        formattedMobile = HTMLmobile.replace("%data%", '<a href="#mobile" id="a-link">' + bio.contacts.mobile + '</a>');
        formattedEmail = HTMLemail.replace("%data%", '<a href="#email" id="a-link">' + bio.contacts.email + '</a>');
        formattedGithub = HTMLgithub.replace("%data%", '<a href="https://github.com/DanWeatherbee" id="a-link">' +
         bio.contacts.github + '</a>');
        formattedlinkedin = HTMLlinkedin.replace("%data%", '<a href="https://www.linkedin.com/in/danweatherbee-web-developer" id="a-link">' +
         bio.contacts.linkedin + '</a>');

        formattedUdacity = HTMLudacity.replace("%data%", '<a href="https://profiles.udacity.com/u/dan15" id="a-link">' +
         bio.contacts.udacity + '</a>');

        formattedLocation = HTMLlocation.replace("%data%", '<a href="https://www.vernon.ca/" id="a-link">' +
         bio.contacts.location + '</a>');
        // created a variable to save on repetition
        var formattedArray = (formattedMobile + formattedEmail + formattedGithub +
         formattedlinkedin + formattedUdacity + formattedLocation);
        $("#topContacts").append(formattedArray);
        $("#footerContacts").append(formattedArray);
        formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
        formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedBiopic);
        $("#header").append(formattedWelcomeMsg);

        // create a div
        $("#header").append(HTMLskillsStart);

        var lenght_of_array = bio.skills.length;
        for (var i = 0; i < lenght_of_array; i++) {

            // format the data
            formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);

            // append the data
            $("#skills").append(formattedSkill);
        }

        formattedName = HTMLheaderName.replace("%data%", bio.name);
        formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        formattedAboutMe = HTMLaboutMe.replace("%data%", bio.about);
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        $("#header").prepend(formattedAboutMe);
    };
    bio.display();
    // Special thanks to the reviewer for clearing up my understanding of how this works.

    education.display = function() {
        education.schools.forEach(function(school) {

            // create a div to hold each school
            $("#education").append(HTMLschoolStart);

            // format the data
            formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
            formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
            formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
            formattedSchoolMajors = HTMLschoolMajor.replace("%data%", school.majors);
            formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
            formattedSchoolUrl = HTMLschoolUrl.replace("%data%", school.url);

            //append the data to the div created in this loop
            $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree +
                formattedSchoolLocation + formattedSchoolMajors + formattedSchoolDates + formattedSchoolUrl);
        });

        $("#education").append(HTMLonlineClasses);

        education.onlineCourses.forEach(function(online) {

            // create a div to hold each online course
            $("#education").append(HTMLschoolStart);

            // format the data
            formattedOnlineTitle1 = HTMLonlineTitle.replace("%data%", online.title);
            formattedOnlineSchool1 = HTMLonlineSchool.replace("%data%", online.school);
            formattedOnlineDates1 = HTMLonlineDates.replace("%data%", online.date);
            formattedOnlineUrl1 = HTMLonlineURL.replace("%data%", online.url);

            //append the data to the div created in this loop
            $(".education-entry:last").append(formattedOnlineTitle1 + formattedOnlineSchool1 +
                formattedOnlineDates1 + formattedOnlineUrl1);
        });
    };
    education.display();

    work.display = function() {
        work.jobs.forEach(function(job) {

            // create div
            $("#work-experience").append(HTMLworkStart);

            // format data
            formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
            formattedTitle = HTMLworkTitle.replace("%data%", job.title);
            formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);
            formattedEmployerTitle = formattedEmployer + formattedTitle;
            formattedDates = HTMLworkDates.replace("%data%", job.dates);
            formattedDescription = HTMLworkDescription.replace("%data%", job.description);

            // append the data
            $(".work-entry:last").append(formattedEmployerTitle + formattedWorkLocation + formattedDates +
                formattedDescription);
        });
    };

    work.display();

    projects.display = function() {

        projects.project.forEach(function(item) {

            // create div
            $("#projects").append(HTMLprojectStart);

            // format the data
            formattedTitle = HTMLworkTitle.replace("%data%", item.title);
            formattedDates = HTMLprojectDates.replace("%data%", item.dates);
            formattedDescription = HTMLprojectDescription.replace("%data%", item.description);

            // append the data
            $(".project-entry:last").append(formattedTitle +
                formattedDates + formattedDescription);

            // see if image exists
            if (item.images.length > 0) {

                // format data
                formattedImage1 = HTMLprojectImage.replace("%data%", item.images[index_zero]);
                formattedImage2 = HTMLprojectImage.replace("%data%", item.images[index_one]);
                formattedImage = formattedImage1 + formattedImage2;
                // append data
                $(".project-entry:last").append(formattedImage);
            }
        });
    };
    projects.display();
};

init.toggle = function () {
    var aboutMeElem = $("#about-me");
    var navElem =  $('#nav');
    // Show hide flip toggle method for nav elements.
            projectsHeaderElem.click(function() {
                projectsElem.addClass('flip');
                bttnShowProjectsElem.fadeIn();
                setTimeout(function() {
                    projectsElem.fadeOut();
                }, 1000);
            });

            bttnShowProjectsElem.click(function() {
                projectsElem.removeClass('flip');
                projectsElem.fadeIn();
                bttnShowProjectsElem.fadeOut();
            });

            workHeaderElem.click(function() {
                workExperienceElem.addClass('flip');
                bttnShowWorkElem.fadeIn();
                // Gives time for animation flip before collapsing the dom.
                setTimeout(function(){
                    workExperienceElem.fadeOut();
                }, 1000);
            });

            bttnShowWorkElem.click(function() {
                workExperienceElem.removeClass('flip');
                workExperienceElem.fadeIn();
                bttnShowWorkElem.fadeOut();
            });

            educationHeaderElem.click(function() {
                educationElem.addClass('flip');
                bttnShowEducationElem.fadeIn();
                setTimeout(function(){
                    educationElem.fadeOut();
                }, 1000);
            });

            bttnShowEducationElem.click(function() {
                educationElem.removeClass('flip');
                educationElem.fadeIn();
                bttnShowEducationElem.fadeOut();
            });

            aboutMeElem.click(function() {
                aboutMeElem.addClass('flip');
                setTimeout(function(){
                aboutMeElem.removeClass('flip');
                aboutMeElem.hide();
                }, 1000);
                navElem.fadeIn();
                playSong.stop();
            });

};
init();
init.toggle();
// TODO add windows timing and error check suite.