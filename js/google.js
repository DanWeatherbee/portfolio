var googleMap = '<div id="map"></div>';
var infoWindowString = "<div id='info' style='color: black;'><div style='color: black;'>" +
    "<em>Dan Weatherbee.</em></div></div><div style='color: black;'><img alt='Ninja image' srcset='images/small/ninja.png'></div>\n " +
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
$("#map-container").hide();

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

        // City I live in.
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
        });

        google.maps.event.addListener(marker, 'click', function() {
            infoWindow.open(map, marker);
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
            // the search request object.

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
};


