var HTMLheaderName = '<h1 id="name" class="text-uppercase letter-spacer">%data%</h1>';
var HTMLheaderRole = '<p id="developer">%data%</p><hr>';
var HTMLaboutMe = '<div id="about-me" class="cubic-bezier">%data%' +
'<img class="img-circle img-responsive me-pic" src="images/small/me.jpg"></div>'

var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">contact</span><span>%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="orange-text">Mobile</span><span>%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="orange-text">Email</span><span>%data%</span></li>';
var HTMLlinkedin = '<li class="flex-item"><span class="orange-text">Linkedin</span><span>%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="orange-text">Github</span><span>%data%</span></li>';
var HTMLudacity = '<li class="flex-item"><span class="orange-text">Udacity</span><span>%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span class="orange-text">Blog</span><span>%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="orange-text">Location</span><span>%data%</span></li>';

var HTMLbioPic = '<div id="biopic-col" class="col-md-1"><img src="%data%" class="biopic"></div>';
var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>';
var HTMLskills = '<li class="flex-item"><span id="skills-span" class="text-uppercase">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#" id="a-link">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';

var HTMLprojectStart = '<div class="project-entry"></div><hr>';
var HTMLprojectTitle = '<a href="#" id="a-link">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img id="project-img" class="responsive-images" src="%data%" alt="project imgage">';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '%data%';
var HTMLschoolDegree = ' -- %data%';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><p>Graduated: %data%</p></em>';
var HTMLschoolUrl = '<br><a href="#education" id="a-link"><em>Url: %data%</em></a><br><hr>';

var HTMLonlineClasses = '<h3 class="red-headers">Online Classes</h3>';
var HTMLonlineTitle = '%data%';
var HTMLonlineSchool = ' - %data%<br>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="https://www.udacity.com" id="a-link">%data%</a><br><hr>';

var internationalizeButton = '<div id="copyright" class="row text-center">Copyright Dan Weatherbee<div>';
var googleMap = '<div id="map"></div>';
var infoWindowString = "<div id='info' style='color: black;'><div style='color: black;'>" +
    "<em>Dan Weatherbee.</em></div></div><div style='color: black;'><img src='images/small/ninja.png'></div>\n " +
    "<div style='color: black;'>Front End Ninja</div>";
/*
The next few lines about clicks are for the Collecting Click Locations quiz in Lesson 2.
*/
clickLocations = [];

function logClicks(x, y) {
    clickLocations.push({
        x: x,
        y: y
    });
}

$(document).click(function(loc) {
    // your code goes here!
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});

// Eror handler in case api fails
ERROR = "!Oop's ... it seams googles api is unavailable. Suggestion: check your connection"
function googleFail() {
  $("#button-show-map").fadeToggle();
  console.log(ERROR);
  alert(ERROR);
}
// first step we call initializeMap after the API success
// added a time out function to load api and then append element and show buttons
function googleSuccess() {
    setTimeout(function(){
    $("#button-show-map").fadeToggle();
      }, 3000);
    $("#map").append(googleMap);
    $("#map-container").fadeToggle();
    $("#live-work-header").click(function() {
        $("#map-container").fadeToggle();
        $("#button-show-map").fadeToggle();
    });
    $("#button-show-map").click(function() {
        $("#map-container").fadeToggle();
        $("#button-show-map").fadeToggle();
        initializeMap();
    });
}

var map; // declares a global map variable

 var initializeMap = function() {

    var locations;

    var mapOptions = {
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

        // initializes an empty array
        var locations = [];


        // error handler to test if bio is defined.
        try {
            bio.contacts.location;
             } catch(e) {
                $("#button-show-map").fadeToggle();
                console.log("could not retrieve location.");
            }
        // adds the single location property from bio to the locations array

        locations.push(bio.contacts.location);

        // iterates through school locations and appends each location to
        // the locations array. Note that forEach is used for array iteration
        // as described in the Udacity FEND Style Guide:
        // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
        education.schools.forEach(function(school) {
            locations.push(school.location);
        });

        // iterates through work locations and appends each location to
        // the locations array. Note that forEach is used for array iteration
        // as described in the Udacity FEND Style Guide:
        // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
        work.jobs.forEach(function(job) {
            locations.push(job.location);
        });

        return locations;
    }

    /*
    createMapMarker(placeData) reads Google Places search results to create map pins.
    placeData is the object returned from search results containing information
    about a single location.
    */
    function createMapMarker(placeData) {
        // infoWindows are the little helper windows that open when you click
        // or hover over a pin on a map. They usually contain more information
        // about a location.
        var infoWindow = new google.maps.InfoWindow();
        // The next lines save location data from the search result object to local variables
        var lat = placeData.geometry.location.lat(); // latitude from the place service
        var lon = placeData.geometry.location.lng(); // longitude from the place service
        var name = placeData.formatted_address; // name of the place from the place service
        var bounds = window.mapBounds; // current boundaries of the map window

        // marker is an object with additional data about the pin for a single location
        var marker = new google.maps.Marker({
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
            marker.setAnimation(google.maps.Animation.BOUNCE);
        });

        // this is where the pin actually gets added to the map.
        // bounds.extend() takes in a map location object
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

        // creates a Google place search service object. PlacesService does the work of
        // actually searching for location data.
        var service = new google.maps.places.PlacesService(map);

        // Iterates through the array of locations, creates a search object for each location
        locations.forEach(function(place) {
            // the search request object
            var request = {
                query: place
            };

            // Actually searches the Google Maps API for location data and runs the callback
            // function with the search results after each search.
            service.textSearch(request, callback);
        });
    }

    // Sets the boundaries of the map based on pin locations
    window.mapBounds = new google.maps.LatLngBounds();

    // locations is an array of location strings returned from locationFinder()
    locations = locationFinder();

    // pinPoster(locations) creates pins on the map for each location in
    // the locations array
    pinPoster(locations);

}

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
    //Make sure the map bounds get updated on page resize
    map.fitBounds(mapBounds);
});
