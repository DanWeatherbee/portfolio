$(document).ready(function() {
    $('body').append('<h4>' + "Time until DOMready: ", Date.now() - timerStart +
     ' milliseconds - seconds: </h4>' + ' ' + (Date.now() - timerStart)/1000);
});

$(window).load(function() {
    $('#about-me').append('<h4>' + "Time until everything loaded: ", Date.now() - timerStart +
     ' milliseconds - seconds: </h4>' + ' ' + (Date.now() - timerStart)/1000);
});

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

// Instantiate audio object.
playSong = new Sound("sound/menu-track.mp3");
playSong.play();

function googleFail() {
  $("#button-show-map").hide();
  $("#map-container").hide();
  console.log(ERROR);
  alert(ERROR);
};

function googleSuccess() {
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
};