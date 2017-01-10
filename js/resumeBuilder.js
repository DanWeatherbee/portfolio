// ------------------------------------ vars --------------------------------
var index_zero = 0;
var index_one = 1;
var bio = {
    "name": "Dan Weatherbee",
    "role": "Front End Web Developer",
    "about": "I have been building, creating, deconstructing, reconstructing, and reverse engineering just for the thrill of it. I have extensive knowledge of Image, Video, Game Editors; I have highly developed communication, problem solving and debugging skills. I have a solid understanding of JavaScript, HTML5, and CSS3. I have additional experience with database types and CMS Deployment and Apache. I am highly motivated and goal-oriented. I can effectively communicate with the creative team and clients. With my skills and experiences, I am confident we can build amazing things together. The best way to contact me is by email or phone. Best regards, yours truly Dan Weatherbee. -  Click this window to Close.",
    "contacts": {
        "mobile": "250-307-6272",
        "email": "dan@jedi-clan.us",
        "github": "Profile",
        "linkedin": "Profile",
        "udacity": "Profile",
        "location": "Okanagan Landing Vernon BC Canada"
    },
    "welcomeMessage": "Front End Ninja",
    "skills": ["AJAX",
        "JSON",
        "APIs",
        "Python",
        "JavaScript",
        "Knockout",
        "Backbone",
        "Jasmine",
        "HTML5",
        "CSS3",
        "JQuery",
        "Bootstrap",
        "Gulp",
        "Git hub"],
    "biopic": "images/small/ninja.png"
};

var education = {
    "schools": [{
        "name": "Okanagan College",
        "location": "Vernon, BC",
        "degree": "Math Upgrade",
        "majors": ["Math 72"],
        "dates": "2014 2015",
        "url": "Sample Link"
    }, {
        "name": "Prince George Senior Secondary",
        "location": "Prince George, BC",
        "degree": "Diploma",
        "majors": ["Grade Twelve"],
        "dates": "1977 1979",
        "url": "Sample Link"
    }],
    "onlineCourses": [{
        "title": "Intro to Programming Nanodegree",
        "school": "udacity",
        "date": "2015 2016",
        "url": "www.udacity.com"
    }, {
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "date": "2016 2016",
        "url": "Front End Resume Builder"
    }, {
        "title": "JavaScript Basics",
        "school": "Udacity",
        "date": "2016 2016",
        "url": "Java Script Resume Builder"
    }]
};

var work = {
    "jobs": [{
        "employer": "Freelance - Dedicated Server Network Configuration",
        "title": "Front End Web Developer",
        "location": "Willow Dr Vernon, BC",
        "dates": "Jan 2017 - Present",
        "description": "I am interested in full stack and this is my pet project to learn it. I find the back end as interesting as the front end and wish to understand it all. What I have been up to; - Learning and understanding the folder structure on a remote dedicated server. - Website creation and deployment from dedicated box up via ssh(putty). - Installed Ubuntu 16.4 on dedicated bare bones Server followed by mysql. - Created database and installed Word Press - Currently researching and learning the built in control panel webmin and its features. - Currently learning PHP(very close to regular javascript), easy to understand. - Currently learning more about mysql queries and database creation. - Currently learning about DNS, Network, nameservers, security and much more."
    },
    {
        "employer": "Pioneer Janitorial Services LTD",
        "title": "Janitorial Technician",
        "location": "Silver Star Vernon, BC",
        "dates": "Sept 2011 - Present",
        "description": "* Organized and Systematized daily operations. * Shortened the time it takes to complete with less effort."
    }, {
        "employer": "Thompson Janitorial Services LTD",
        "title": "Janitorial Technician",
        "location": "Kalamalka Lake Vernon, BC",
        "dates": "Jan 2009 - Sept 2011",
        "description": "* Operated machines and maintained  the building. * Simplified tasks and increased productivity and profit."
    }]
};

var projects = {
    "project": [{
        "title": "<a href='https://danweatherbee.github.io/app-p6/' id='a-link'>" +
            "Feed Reader Testing P6 FEND</a>",
        "dates": "Dec 1 2016",
        "description": "app-p6 FEND Wrote comprehensive unit tests, using" +
        " the Jasmine testing framework, for an RSS Feed Reader application that" +
        " uses Google's RSS API.",
        "images": ["images/medium/app-6.png", "images/medium/app-6-code.png"]
    }, {
        "title": "<a href='https://danweatherbee.github.io/app-p5/' id='a-link'>" +
            "Neighborhood Map P5 FEND</a>",
        "dates": "2016",
        "description": "Project 5 FEND A single-page web application built using" +
        " the Knockout framework, that displays a Google Map of an area and " +
        "various points of interest. Users can search all included landmarks and, when" +
        " selected, additional information about a landmark is presented from the" +
        " FourSquare and Flickr APIs.",
        "images": ["images/medium/app-5-gif.gif", "images/medium/app-5.png"]
    },
    {
        "title": "<a href='https://danweatherbee.github.io/app-p4/' id='a-link'>" +
            "Website Optimization P4 FEND</a>",
        "dates": "2016",
        "description": "app-p4 FEND Optimized an inefficient web application's JavaScript," +
        " CSS and assets delivery, ensuring it runs at 60 fps and achieves a PageSpeed" +
        " score of at least 95.",
        "images": ["images/medium/web-performance.png", "images/medium/web-performance-2.png"]
    },
    {
        "title": "<a href='https://danweatherbee.github.io/app-p3/' id='a-link'>" +
            "Frontend Nanodegree Arcade Game P3 FEND</a>",
        "dates": "2016",
        "description": "app-p3 FEND An HTML5 Canvas powered video game," +
        " developed using the best practices in Object Oriented JavaScript.",
        "images": ["images/medium/arcade.png", "images/medium/arcade-2.png"]
    }]
};
$("#test-suite").hide();
// new code for sound
 var Sound = function(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function() {
        this.sound.play();
    }
    this.stop = function() {
        this.sound.pause();
    }
};
var playSong = new Sound("sound/menu-track.mp3");

$(window).resize(function() {
    var viewportWidth = $(window).width();
    var viewportHeight = $(window).height();
    if (viewportWidth < 1200) {
        playSong.stop();
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
        playSong.play();
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