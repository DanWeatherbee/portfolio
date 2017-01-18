//Classes

Sound = function (src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    $("#player-ctrl").append(this.sound);
    this.play = function () {
        this.sound.play();
    };
    this.stop = function () {
        this.sound.pause();
    };
};
playSong = new Sound("sound/menu-track.mp3");

DomControl = function (selector) {

    this.selector = $(selector);
    this.add = function (formattedData) {
        this.selector.append(formattedData);
    };

    this.before = function (formattedData) {
        this.selector.prepend(formattedData);
    };

    this.show = function () {
        this.selector.show();
    };

    this.hide = function () {
        this.selector.hide();
    };
};

contact = new DomControl("#top-contacts");
footer = new DomControl("#footer-contacts");
header = new DomControl("#header");
test = new DomControl("#test-suite");
landing = new DomControl(".landing");

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
//Declarations

// HTML containers
var HTMLheaderName = '<h1 id="name" class="text-uppercase letter-spacer">%data%</h1>';
var HTMLheaderRole = '<p id="developer" class="slide-animation">%data%</p><hr>';
var HTMLaboutMe = '<div id="about-me" class="cubic-bezier">%data%' +
'<img class="img-circle img-responsive me-pic" src="images/small/me.jpg"></div>';

var HTMLcontactGeneric = '<li class="flex-item"><span class=>contact</span><span>%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span>Mobile</span><span>%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span>Email</span><span>%data%</span></li>';
var HTMLlinkedin = '<li class="flex-item"><span>Linkedin</span><span>%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span>Github</span><span>%data%</span></li>';
var HTMLudacity = '<li class="flex-item"><span>Udacity</span><span>%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span>Blog</span><span>%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span>Location</span><span>%data%</span></li>';

var HTMLbioPic = '<div id="biopic-col" class="col-md-1"><img src="%data%" class="biopic"></div>';
var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>';
var HTMLskills = '<li class="flex-item"><span id="skills-span" class="text-uppercase">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#" id="a-link">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p class="cubic-bezier"><br>%data%</p>';

var HTMLprojectStart = '<div class="project-entry"></div><hr>';
var HTMLprojectTitle = '<a href="#" id="a-link">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p class="cubic-bezier"><br>%data%</p>';
var HTMLprojectImage = '<img id="project-img" class="responsive-images" src="%data%" alt="project imgage">';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '%data%';
var HTMLschoolDegree = ' -- %data%';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><p class="cubic-bezier">Graduated: %data%</p></em>';
var HTMLschoolUrl = '<br><a href="#education" id="a-link"><em>Url: %data%</em></a><br><hr>';

var HTMLonlineClasses = '<h3 class="red-headers">Online Classes</h3>';
var HTMLonlineTitle = '%data%';
var HTMLonlineSchool = ' - %data%<br>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="https://www.udacity.com" id="a-link">%data%</a><br><hr>';

// Globals

var workExperienceElem = $('#work-experience');
var projectsElem = $("#projects");
var educationElem = $("#education");
var mapContainerElem = $("#map-container");
var bttnShowWorkElem = $("#button-show-work");
var bttnShowProjectsElem = $("#button-show-projects");
var bttnShowEducationElem = $("#button-show-education");
var projectsHeaderElem = $("#projects-header");
var workHeaderElem = $("#work-header");
var educationHeaderElem = $("#education-header");
var buttonShowMapElem = $("#button-show-map");
var showNavButton = $("#show-nav-button");
var ERROR = "!Oop's ... it seams googles api is unavailable. Suggestion: check your connection";

// Mutables
var formattedArray;
var selector;
var src;
var index_zero = 0;
var index_one = 1;
var playSong;
var viewportWidth;
var viewportHeight;
var formattedBioName;
var formattedMobile;
var formattedEmail;
var formattedGithub;
var formattedlinkedin;
var formattedUdacity;
var formattedLocation;
var formattedBiopic;
var formattedWelcomeMsg;
var formattedSkill;
var formattedName;
var formattedRole;
var formattedAboutMe;
var formattedSchoolName;
var formattedSchoolDegree;
var formattedSchoolLocation;
var formattedSchoolMajors;
var formattedSchoolDates;
var formattedSchoolUrl;
var formattedOnlineTitle1;
var formattedOnlineSchool1;
var formattedOnlineDates1;
var formattedOnlineUrl1;
var formattedEmployer;
var formattedTitle;
var formattedWorkLocation;
var formattedEmployerTitle;
var formattedDates;
var formattedDescription;
var formattedImage1;
var formattedImage2;
var formattedImage;
var init;
var lenght_of_array;
var i;
var aboutMeElem;
var navElem;
var name;
var landingElem;
var Sound;
var playSong;
var DomControl;
var contact;
var footer;
var header;
var landing;
var $;
var toggleVisability;









bio.display = function () {
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
    formattedArray = (formattedMobile + formattedEmail + formattedGithub +
        formattedlinkedin + formattedUdacity + formattedLocation);
    // append the data
    contact.add(formattedArray);

    formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
    formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    // append the data
    header.add(formattedBiopic);
    header.add(formattedWelcomeMsg);
    header.add(HTMLskillsStart);

    lenght_of_array = bio.skills.length;
    for (i = 0; i < lenght_of_array; i++) {

        // format the data
        formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);

        // append the data
        $("#skills").append(formattedSkill);

    }
    // format the data
    formattedName = HTMLheaderName.replace("%data%", bio.name);
    formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    formattedAboutMe = HTMLaboutMe.replace("%data%", bio.about);

    // append the data
    header.before(formattedRole);
    header.before(formattedName);
    landing.add(formattedAboutMe);
};
education.display = function () {
    education.schools.forEach(function (school) {

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

    education.onlineCourses.forEach(function (online) {

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


work.display = function () {
    work.jobs.forEach(function (job) {

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
    projects.display = function () {

    projects.project.forEach(function (item) {

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

var googleMap = '<div id="map"></div>';
var infoWindowString = "<div id='info' style='color: black;'><div style='color: black;'>" +
    "<em>Dan Weatherbee.</em></div></div><div style='color: black;'><img src='images/small/ninja.png'></div>\n " +
    "<div style='color: black;'>Front End Ninja</div>";
var bounds;
var marker;
var request;
var map;
var service;
var lat;
var lon;
var vernon;
var panorama;
var infoWindow;
var locations;
var mapOptions;
var initializeMap;
var locations = [];

function googleFail() {
  $("#button-show-map").hide();
  console.log(ERROR);
  alert(ERROR);
}


function googleSuccess() {
    $("#map-container").hide();

    setTimeout(function(){


        $("#map").append(googleMap);
        $("#button-show-map").fadeIn();

        $("#live-work-header").click(function() {
            $("#map-container").fadeOut();
            $("#button-show-map").fadeIn();
        });

        $("#button-show-map").click(function() {
            $("#map-container").fadeIn();
                initializeMap();
            $("#button-show-map").fadeOut();
        });
          }, 3000);
}

 initializeMap = function() {
  $("#button-show-map").hide();
    mapOptions = {
        disableDefaultUI: true
    };

    /*
    For the map to be displayed, the googleMap var must be
    appended to #map in resumeBuilder.js.
    */
    map = new google.maps.Map(document.querySelector('#map'), mapOptions);


    /*
    locationFinder() returns an array of every location string from the JSONs
    written for bio, education, and work.
    */
    function locationFinder() {
        // error handler to test if bio is defined.
        try {
            bio.contacts.location;
             } catch(e) {
                $("#button-show-map").fadeToggle();
                console.log("could not retrieve location.");
            }
        // adds the single location property from bio to the locations array

        locations.push(bio.contacts.location);

        /*
         iterates through school locations and appends each location to
         the locations array.
        */
        education.schools.forEach(function(school) {
            locations.push(school.location);
        });

        /* iterates through work locations and appends each location to
          the locations array.
         */
        work.jobs.forEach(function(job) {
            locations.push(job.location);
        });

        vernon = {lat: 50.2670, lng: -119.2720};

        panorama = new google.maps.StreetViewPanorama(
            document.getElementById('pano'), {
            position: vernon,
            pov: {
            heading: 34,
            pitch: 10
            }
          });
        map.setStreetView(panorama);
        return locations;
    }

    /*
    createMapMarker(placeData) reads Google Places search results to create map pins.
    placeData is the object returned from search results containing information
    about a single location.
    */
    function createMapMarker(placeData) {
        /*
         infoWindows are the little helper windows that open when you click
          or hover over a pin on a map. They usually contain more information
          about a location.
        */
        infoWindow = new google.maps.InfoWindow();
        // The next lines save location data from the search result object to local variables
        lat = placeData.geometry.location.lat(); // latitude from the place service
        lon = placeData.geometry.location.lng(); // longitude from the place service
        name = placeData.formatted_address; // name of the place from the place service
        bounds = window.mapBounds; // current boundaries of the map window

        // marker is an object with additional data about the pin for a single location
        marker = new google.maps.Marker({
            map: map,
            position: placeData.geometry.location,
            title: name,
            animation: google.maps.Animation.DROP
        });

        infoWindow.setContent(infoWindowString);
        infoWindow.addListener('closeclick', function(){
            map.setZoom(16);
            map.fitBounds(bounds);
            marker.setAnimation(google.maps.Animation.DROP);
        })

        google.maps.event.addListener(marker, 'click', function() {
            infoWindow.open(map, marker)
            map.setZoom(10);
            map.panTo(marker.getPosition());
            console.log(marker.getPosition());
            marker.setAnimation(google.maps.Animation.BOUNCE);
        });

        /*
         this is where the pin actually gets added to the map.
         bounds.extend() takes in a map location object
         */
        bounds.extend(new google.maps.LatLng(lat, lon));
        // fit the map to the new marker
        map.fitBounds(bounds);
        // center the map
        map.panTo(bounds.getCenter());
    }

    /*
    callback(results, status) makes sure the search returned results for a location.
    If so, it creates a new map marker for that location.
    */
    function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            createMapMarker(results[0]);
        }
    }

    /*
    pinPoster(locations) takes in the array of locations created by locationFinder()
    and fires off Google place searches for each location
    */
    function pinPoster(locations) {

        /*
         creates a Google place search service object. PlacesService does the work of
         actually searching for location data.
         */
        var service = new google.maps.places.PlacesService(map);

        // Iterates through the array of locations, creates a search object for each location
        locations.forEach(function(place) {
            // the search request object
            request = {
                query: place
            };

            /*
            Actually searches the Google Maps API for location data and runs the callback
            function with the search results after each search.
            */
            service.textSearch(request, callback);
        });
    }

    // Sets the boundaries of the map based on pin locations
    window.mapBounds = new google.maps.LatLngBounds();

    // locations is an array of location strings returned from locationFinder()
    locations = locationFinder();

    /*
     pinPoster(locations) creates pins on the map for each location in
    the locations array
    */
    pinPoster(locations);



    /*
    Vanilla JS way to listen for resizing of the window
    and adjust map bounds
    */
    window.addEventListener('resize', function(e) {
        //Make sure the map bounds get updated on page resize
        map.fitBounds(mapBounds);
    });
    $("#button-show-map").show;
}


