
(function(){
    "use strict";
})();

try {
    bio.name;
} catch (e) {
    test.show();
    test.add('<h4>Bio is defined ---> Failed!</h4>');
}
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

    contact.add(formattedArray);
    footer.add(formattedArray);

    formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
    formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    header.add(formattedBiopic);
    header.add(formattedWelcomeMsg);

    // create a div
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


work.display = function() {
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