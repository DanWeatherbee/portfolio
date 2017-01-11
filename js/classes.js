//Classes

 var Sound = function(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    $('#header').append(this.sound);
    this.play = function() {
        this.sound.play();
    }
    this.stop = function() {
        this.sound.pause();
    }
};
playSong = new Sound("sound/menu-track.mp3");

var DomControl = function(selector) {

        this.selector = $(selector);
        this.add = function(formattedData) {
                this.selector.append(formattedData);
        };

        this.before = function(formattedData) {
            this.selector.prepend(formattedData);
        };

        this.show = function() {
            this.selector.show();
        };

        this.hide = function() {
            this.selector.hide();
        };
};
var contact = new DomControl('#top-contacts');
var footer = new DomControl('#footer-contacts');
var header = new DomControl('#header');
var test = new DomControl('#test-suite');
