function googleFail(){$("#button-show-map").hide(),console.log(ERROR),alert(ERROR)}function googleSuccess(){$("#map-container").hide(),setTimeout(function(){$("#map").append(googleMap),$("#button-show-map").fadeIn(),$("#live-work-header").click(function(){$("#map-container").fadeOut(),$("#button-show-map").fadeIn()}),$("#button-show-map").click(function(){$("#map-container").fadeIn(),initializeMap(),$("#button-show-map").fadeOut()})},3e3)}Sound=function(e){this.sound=document.createElement("audio"),this.sound.src=e,this.sound.setAttribute("preload","auto"),this.sound.setAttribute("controls","none"),$("#header").append(this.sound),this.play=function(){this.sound.play()},this.stop=function(){this.sound.pause()}},playSong=new Sound("sound/menu-track.mp3"),DomControl=function(e){this.selector=$(e),this.add=function(e){this.selector.append(e)},this.before=function(e){this.selector.prepend(e)},this.show=function(){this.selector.show()},this.hide=function(){this.selector.hide()}},contact=new DomControl("#top-contacts"),footer=new DomControl("#footer-contacts"),header=new DomControl("#header"),test=new DomControl("#test-suite"),landing=new DomControl(".landing");var bio={name:"Dan Weatherbee",role:"Front End Web Developer",about:"I have been building, creating, deconstructing, reconstructing, and reverse engineering just for the thrill of it. I have extensive knowledge of Image, Video, Game Editors; I have highly developed communication, problem solving and debugging skills. I have a solid understanding of JavaScript, HTML5, and CSS3. I have additional experience with database types and CMS Deployment and Apache. I am highly motivated and goal-oriented. I can effectively communicate with the creative team and clients. With my skills and experiences, I am confident we can build amazing things together. The best way to contact me is by email or phone. Best regards, yours truly Dan Weatherbee. -  Click this window to Close.",contacts:{mobile:"250-307-6272",email:"dan@jedi-clan.us",github:"Profile",linkedin:"Profile",udacity:"Profile",location:"Okanagan Landing Vernon BC Canada"},welcomeMessage:"Front End Ninja",skills:["AJAX","JSON","APIs","Python","JavaScript","Knockout","Backbone","Jasmine","HTML5","CSS3","JQuery","Bootstrap","Gulp","Git hub"],biopic:"images/small/ninja.png"},education={schools:[{name:"Okanagan College",location:"Vernon, BC",degree:"Math Upgrade",majors:["Math 72"],dates:"2014 2015",url:"Sample Link"},{name:"Prince George Senior Secondary",location:"Prince George, BC",degree:"Diploma",majors:["Grade Twelve"],dates:"1977 1979",url:"Sample Link"}],onlineCourses:[{title:"Intro to Programming Nanodegree",school:"udacity",date:"2015 2016",url:"www.udacity.com"},{title:"Front-End Web Developer Nanodegree",school:"Udacity",date:"2016 2016",url:"Front End Resume Builder"},{title:"JavaScript Basics",school:"Udacity",date:"2016 2016",url:"Java Script Resume Builder"}]},work={jobs:[{employer:"Freelance - Dedicated Server Network Configuration",title:"Front End Web Developer",location:"Willow Dr Vernon, BC",dates:"Jan 2017 - Present",description:"I am interested in full stack and this is my pet project to learn it. I find the back end as interesting as the front end and wish to understand it all. What I have been up to; - Learning and understanding the folder structure on a remote dedicated server. - Website creation and deployment from dedicated box up via ssh(putty). - Installed Ubuntu 16.4 on dedicated bare bones Server followed by mysql. - Created database and installed Word Press - Currently researching and learning the built in control panel webmin and its features. - Currently learning PHP(very close to regular javascript), easy to understand. - Currently learning more about mysql queries and database creation. - Currently learning about DNS, Network, nameservers, security and much more."},{employer:"Pioneer Janitorial Services LTD",title:"Janitorial Technician",location:"Silver Star Vernon, BC",dates:"Sept 2011 - Present",description:"* Organized and Systematized daily operations. * Shortened the time it takes to complete with less effort."},{employer:"Thompson Janitorial Services LTD",title:"Janitorial Technician",location:"Kalamalka Lake Vernon, BC",dates:"Jan 2009 - Sept 2011",description:"* Operated machines and maintained  the building. * Simplified tasks and increased productivity and profit."}]},projects={project:[{title:"<a href='https://danweatherbee.github.io/app-p6/' id='a-link'>Feed Reader Testing P6 FEND</a>",dates:"Dec 1 2016",description:"app-p6 FEND Wrote comprehensive unit tests, using the Jasmine testing framework, for an RSS Feed Reader application that uses Google's RSS API.",images:["images/medium/app-6.png","images/medium/app-6-code.png"]},{title:"<a href='https://danweatherbee.github.io/app-p5/' id='a-link'>Neighborhood Map P5 FEND</a>",dates:"2016",description:"Project 5 FEND A single-page web application built using the Knockout framework, that displays a Google Map of an area and various points of interest. Users can search all included landmarks and, when selected, additional information about a landmark is presented from the FourSquare and Flickr APIs.",images:["images/medium/app-5-gif.gif","images/medium/app-5.png"]},{title:"<a href='https://danweatherbee.github.io/app-p4/' id='a-link'>Website Optimization P4 FEND</a>",dates:"2016",description:"app-p4 FEND Optimized an inefficient web application's JavaScript, CSS and assets delivery, ensuring it runs at 60 fps and achieves a PageSpeed score of at least 95.",images:["images/medium/web-performance.png","images/medium/web-performance-2.png"]},{title:"<a href='https://danweatherbee.github.io/app-p3/' id='a-link'>Frontend Nanodegree Arcade Game P3 FEND</a>",dates:"2016",description:"app-p3 FEND An HTML5 Canvas powered video game, developed using the best practices in Object Oriented JavaScript.",images:["images/medium/arcade.png","images/medium/arcade-2.png"]}]},HTMLheaderName='<h1 id="name" class="text-uppercase letter-spacer">%data%</h1>',HTMLheaderRole='<p id="developer">%data%</p><hr>',HTMLaboutMe='<div id="about-me" class="cubic-bezier">%data%<img class="img-circle img-responsive me-pic" src="images/small/me.jpg"></div>',HTMLcontactGeneric='<li class="flex-item"><span class="orange-text">contact</span><span>%data%</span></li>',HTMLmobile='<li class="flex-item"><span class="orange-text">Mobile</span><span>%data%</span></li>',HTMLemail='<li class="flex-item"><span class="orange-text">Email</span><span>%data%</span></li>',HTMLlinkedin='<li class="flex-item"><span class="orange-text">Linkedin</span><span>%data%</span></li>',HTMLgithub='<li class="flex-item"><span class="orange-text">Github</span><span>%data%</span></li>',HTMLudacity='<li class="flex-item"><span class="orange-text">Udacity</span><span>%data%</span></li>',HTMLblog='<li class="flex-item"><span class="orange-text">Blog</span><span>%data%</span></li>',HTMLlocation='<li class="flex-item"><span class="orange-text">Location</span><span>%data%</span></li>',HTMLbioPic='<div id="biopic-col" class="col-md-1"><img src="%data%" class="biopic"></div>',HTMLwelcomeMsg='<span class="welcome-message">%data%</span>',HTMLskillsStart='<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>',HTMLskills='<li class="flex-item"><span id="skills-span" class="text-uppercase">%data%</span></li>',HTMLworkStart='<div class="work-entry"></div>',HTMLworkEmployer='<a href="#" id="a-link">%data%',HTMLworkTitle=" - %data%</a>",HTMLworkDates='<div class="date-text">%data%</div>',HTMLworkLocation='<div class="location-text">%data%</div>',HTMLworkDescription='<p class="cubic-bezier"><br>%data%</p>',HTMLprojectStart='<div class="project-entry"></div><hr>',HTMLprojectTitle='<a href="#" id="a-link">%data%</a>',HTMLprojectDates='<div class="date-text">%data%</div>',HTMLprojectDescription='<p class="cubic-bezier"><br>%data%</p>',HTMLprojectImage='<img id="project-img" class="responsive-images" src="%data%" alt="project imgage">',HTMLschoolStart='<div class="education-entry"></div>',HTMLschoolName="%data%",HTMLschoolDegree=" -- %data%",HTMLschoolDates='<div class="date-text">%data%</div>',HTMLschoolLocation='<div class="location-text">%data%</div>',HTMLschoolMajor='<em><p class="cubic-bezier">Graduated: %data%</p></em>',HTMLschoolUrl='<br><a href="#education" id="a-link"><em>Url: %data%</em></a><br><hr>',HTMLonlineClasses='<h3 class="red-headers">Online Classes</h3>',HTMLonlineTitle="%data%",HTMLonlineSchool=" - %data%<br>",HTMLonlineDates='<div class="date-text">%data%</div>',HTMLonlineURL='<br><a href="https://www.udacity.com" id="a-link">%data%</a><br><hr>',workExperienceElem=$("#work-experience"),projectsElem=$("#projects"),educationElem=$("#education"),mapContainerElem=$("#map-container"),letsConnectElem=$("#lets-connect"),bttnShowWorkElem=$("#button-show-work"),bttnShowProjectsElem=$("#button-show-projects"),bttnShowEducationElem=$("#button-show-education"),projectsHeaderElem=$("#projects-header"),workHeaderElem=$("#work-header"),educationHeaderElem=$("#education-header"),ERROR="!Oop's ... it seams googles api is unavailable. Suggestion: check your connection",formattedArray,selector,src,index_zero=0,index_one=1,playSong,viewportWidth,viewportHeight,formattedBioName,formattedMobile,formattedEmail,formattedGithub,formattedlinkedin,formattedUdacity,formattedLocation,formattedBiopic,formattedWelcomeMsg,formattedSkill,formattedName,formattedRole,formattedAboutMe,formattedSchoolName,formattedSchoolDegree,formattedSchoolLocation,formattedSchoolMajors,formattedSchoolDates,formattedSchoolUrl,formattedOnlineTitle1,formattedOnlineSchool1,formattedOnlineDates1,formattedOnlineUrl1,formattedEmployer,formattedTitle,formattedWorkLocation,formattedEmployerTitle,formattedDates,formattedDescription,formattedImage1,formattedImage2,formattedImage,init,lenght_of_array,i,aboutMeElem,navElem,name,landingElem,Sound,playSong,DomControl,contact,footer,header,landing,$;bio.display=function(){for(formattedBioName=HTMLcontactGeneric.replace("%data%",bio.name),formattedMobile=HTMLmobile.replace("%data%",'<a href="#mobile" id="a-link">'+bio.contacts.mobile+"</a>"),formattedEmail=HTMLemail.replace("%data%",'<a href="#email" id="a-link">'+bio.contacts.email+"</a>"),formattedGithub=HTMLgithub.replace("%data%",'<a href="https://github.com/DanWeatherbee" id="a-link">'+bio.contacts.github+"</a>"),formattedlinkedin=HTMLlinkedin.replace("%data%",'<a href="https://www.linkedin.com/in/danweatherbee-web-developer" id="a-link">'+bio.contacts.linkedin+"</a>"),formattedUdacity=HTMLudacity.replace("%data%",'<a href="https://profiles.udacity.com/u/dan15" id="a-link">'+bio.contacts.udacity+"</a>"),formattedLocation=HTMLlocation.replace("%data%",'<a href="https://www.vernon.ca/" id="a-link">'+bio.contacts.location+"</a>"),formattedArray=formattedMobile+formattedEmail+formattedGithub+formattedlinkedin+formattedUdacity+formattedLocation,contact.add(formattedArray),footer.add(formattedArray),formattedBiopic=HTMLbioPic.replace("%data%",bio.biopic),formattedWelcomeMsg=HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage),header.add(formattedBiopic),header.add(formattedWelcomeMsg),header.add(HTMLskillsStart),lenght_of_array=bio.skills.length,i=0;i<lenght_of_array;i++)formattedSkill=HTMLskills.replace("%data%",bio.skills[i]),$("#skills").append(formattedSkill);formattedName=HTMLheaderName.replace("%data%",bio.name),formattedRole=HTMLheaderRole.replace("%data%",bio.role),formattedAboutMe=HTMLaboutMe.replace("%data%",bio.about),header.before(formattedRole),header.before(formattedName),landing.add(formattedAboutMe)},education.display=function(){education.schools.forEach(function(e){$("#education").append(HTMLschoolStart),formattedSchoolName=HTMLschoolName.replace("%data%",e.name),formattedSchoolDegree=HTMLschoolDegree.replace("%data%",e.degree),formattedSchoolLocation=HTMLschoolLocation.replace("%data%",e.location),formattedSchoolMajors=HTMLschoolMajor.replace("%data%",e.majors),formattedSchoolDates=HTMLschoolDates.replace("%data%",e.dates),formattedSchoolUrl=HTMLschoolUrl.replace("%data%",e.url),$(".education-entry:last").append(formattedSchoolName+formattedSchoolDegree+formattedSchoolLocation+formattedSchoolMajors+formattedSchoolDates+formattedSchoolUrl)}),$("#education").append(HTMLonlineClasses),education.onlineCourses.forEach(function(e){$("#education").append(HTMLschoolStart),formattedOnlineTitle1=HTMLonlineTitle.replace("%data%",e.title),formattedOnlineSchool1=HTMLonlineSchool.replace("%data%",e.school),formattedOnlineDates1=HTMLonlineDates.replace("%data%",e.date),formattedOnlineUrl1=HTMLonlineURL.replace("%data%",e.url),$(".education-entry:last").append(formattedOnlineTitle1+formattedOnlineSchool1+formattedOnlineDates1+formattedOnlineUrl1)})},work.display=function(){work.jobs.forEach(function(e){$("#work-experience").append(HTMLworkStart),formattedEmployer=HTMLworkEmployer.replace("%data%",e.employer),formattedTitle=HTMLworkTitle.replace("%data%",e.title),formattedWorkLocation=HTMLworkLocation.replace("%data%",e.location),formattedEmployerTitle=formattedEmployer+formattedTitle,formattedDates=HTMLworkDates.replace("%data%",e.dates),formattedDescription=HTMLworkDescription.replace("%data%",e.description),$(".work-entry:last").append(formattedEmployerTitle+formattedWorkLocation+formattedDates+formattedDescription)})},projects.display=function(){projects.project.forEach(function(e){$("#projects").append(HTMLprojectStart),formattedTitle=HTMLworkTitle.replace("%data%",e.title),formattedDates=HTMLprojectDates.replace("%data%",e.dates),formattedDescription=HTMLprojectDescription.replace("%data%",e.description),$(".project-entry:last").append(formattedTitle+formattedDates+formattedDescription),e.images.length>0&&(formattedImage1=HTMLprojectImage.replace("%data%",e.images[index_zero]),formattedImage2=HTMLprojectImage.replace("%data%",e.images[index_one]),formattedImage=formattedImage1+formattedImage2,$(".project-entry:last").append(formattedImage))})};var googleMap='<div id="map"></div>',infoWindowString="<div id='info' style='color: black;'><div style='color: black;'><em>Dan Weatherbee.</em></div></div><div style='color: black;'><img src='images/small/ninja.png'></div>\n <div style='color: black;'>Front End Ninja</div>",bounds,marker,request,map,service,lat,lon,vernon,panorama,infoWindow,locations,mapOptions,initializeMap,locations=[];initializeMap=function(){function e(){try{bio.contacts.location}catch(e){$("#button-show-map").fadeToggle(),console.log("could not retrieve location.")}return locations.push(bio.contacts.location),education.schools.forEach(function(e){locations.push(e.location)}),work.jobs.forEach(function(e){locations.push(e.location)}),vernon={lat:50.267,lng:-119.272},panorama=new google.maps.StreetViewPanorama(document.getElementById("pano"),{position:vernon,pov:{heading:34,pitch:10}}),map.setStreetView(panorama),locations}function a(e){infoWindow=new google.maps.InfoWindow,lat=e.geometry.location.lat(),lon=e.geometry.location.lng(),name=e.formatted_address,bounds=window.mapBounds,marker=new google.maps.Marker({map:map,position:e.geometry.location,title:name,animation:google.maps.Animation.DROP}),infoWindow.setContent(infoWindowString),infoWindow.addListener("closeclick",function(){map.setZoom(16),map.fitBounds(bounds),marker.setAnimation(google.maps.Animation.DROP)}),google.maps.event.addListener(marker,"click",function(){infoWindow.open(map,marker),map.setZoom(10),map.panTo(marker.getPosition()),console.log(marker.getPosition()),marker.setAnimation(google.maps.Animation.BOUNCE)}),bounds.extend(new google.maps.LatLng(lat,lon)),map.fitBounds(bounds),map.panTo(bounds.getCenter())}function t(e,t){t==google.maps.places.PlacesServiceStatus.OK&&a(e[0])}function o(e){var a=new google.maps.places.PlacesService(map);e.forEach(function(e){request={query:e},a.textSearch(request,t)})}$("#button-show-map").hide(),mapOptions={disableDefaultUI:!0},map=new google.maps.Map(document.querySelector("#map"),mapOptions),window.mapBounds=new google.maps.LatLngBounds,locations=e(),o(locations),window.addEventListener("resize",function(e){map.fitBounds(mapBounds)}),$("#button-show-map").show};