/*
Classes
Created an object class to take a selector and manipulate it.
*/
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

// Instantiate objects.
contact = new DomControl("#top-contacts");
header = new DomControl("#header");
test = new DomControl("#test-suite");
landing = new DomControl(".landing");