//Declarations

// HTML containers
var HTMLheaderName = '<h1 id="name" class="text-uppercase letter-spacer">%data%</h1>';
var HTMLheaderRole = '<p id="developer" class="slide-animation">%data%</p><hr>';
// Edit srcset="dist/images/small/me.jpg" to srcset="dist/images/small/me.jpg.gz" for gzip.
var HTMLaboutMe = '<div id="about-me" class="cubic-bezier">%data%' +
'<img class="img-circle img-responsive me-pic alt="Picture of Dan Weatherbee" srcset="dist/images/small/me.jpg"></div>';

var HTMLcontactGeneric = '<li class="flex-item"><span class=>contact</span><span>%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span>Mobile</span><span>%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span>Email</span><span>%data%</span></li>';
var HTMLlinkedin = '<li class="flex-item"><span>Linkedin</span><span>%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span>Github</span><span>%data%</span></li>';
var HTMLudacity = '<li class="flex-item"><span>Udacity</span><span>%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span>Blog</span><span>%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span>Location</span><span>%data%</span></li>';

var HTMLbioPic = '<div id="biopic-col" class="col-md-1"><img srcset="%data%" class="biopic" alt="Ninja image"></div>';
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
var HTMLprojectImage = '<img id="project-img" class="responsive-images" srcset="%data%" alt="project image">';

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







