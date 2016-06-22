$(function(){
    //Google Map Api Key: AIzaSyCKCALIrRni_kWQV-OE8KFGJK47dRjiKHc

    var bio = {
        "name": "Zuhui He",
        "role": "Web Developer",
        "contacts": {
            "email": "gslzwiesler@gmail.com",
            "github": "syrWiesler",
            "mobile": "+1-315-560-1817",
            "location": "San Jose, California"
        },
        "biopic": "./img/netflix-logo.png",
        "welcomeMessage": "Netflix Webpage Layout mockup design",
        "skills": ["Python", "HTML5", "CSS3", "JavaScript", "JQuery", "Responsive Design", "Linux", "My SQL", "SQL Server", "R", "Matlab"]
    };
    window.bio = bio;

    var work = {
        "jobs": [{
            "employer": "Greyrock Farm",
            "title": "Web Developer",
            "location": "Syracuse, NY",
            "dates": "Jan 2016 - May 2016",
            "description": "Design and insert google map in a web page by coding in google map API. The map indicate several important locations with different markers."
            //"description": [
            //    "Design and insert google map in a web page by coding in google map API. The map indicate several important locations with different markers.",
            //    "Design an interface of ordering options including various categories of products and prices"
            //]
        }]
    };
    window.work = work;


    var education = {
        "schools":
        [{
        "name": "Syracuse University, NY",
        "dates": "May 2015 - Dec 2016",
        "degree": "Master of Science",
        "location": "Syracuse, NY",
        "majors": ["Computer Systems Networking and Telecommunications"],
        "url": "www.syr.edu"
    }, {
        "name": "Syracuse University, NY",
        "dates": "Aug 2013 - May2015",
        "degree": "Master of science",
        "location": "Syracuse, NY",
        "majors": ["Mechanical Engineering"],
        "url": "www.syr.edu"
    }
    //        , {
    //    "name": "Yanshan University, China",
    //    "dates": "Aug 2009 - May 2013",
    //    "degree": "Bachelor of Science",
    //    "location": "Syracuse, NY",
    //    "major": "Mechanical Engineering",
    //    "url": "www.ysu.edu.cn"
    //}, {
    //    "name": "Udacity online course",
    //    "dates": "June 2016",
    //    "degree": "Nano Degree: Front End Web Developer",
    //    "major": "",
    //    "url": "www.udacity.com"
    //}
        ],"onlineCourses": [{
            "school": "Udacity",
            "title": "Nano Degree: Front End Web Developer",
            "date": "May 2016",
            "url": "https://www.google.com"
        }]
};

    window.education = education;

    var projects = {"projects":[{
            "title": "Online Portfolio",
            "dates": "Jun 2016",
            "description": "Create an online portfolio as part of my work in Udacity Front End Web Developer Nano-degree",
            "images": ["./img/portfolio.png"],
            "alt": ["portfolio"]
        }, {
            "title": "Netflix Layout Design",
            "dates": "April 2016",
            "description": "Cooperating with a team member to design a website for Netflix on PC and mobile device Implementing the website layout design by coding in HTML5 and CSS3, Adding dynamic automatic slideshow, side menu, video trailer functions in the web page by coding in JQuery",
            "images": ["./img/netflix-logo.png", "netflix-design"],
            "alt": ["netflix-design"]
    }, {
            "title": "Travel Agency Layout Design",
            "dates": "March 2016",
            "description": "Create a website for a travel agency by coding in HTML5 and CSS3. The website is composed of five pages including index, information, ticket, scenery and about us ",
            "images": ["./img/travel-logo.png"],
            "alt": ["travel-agency"]
    },{
            "title": "Data Management",
            "dates": "March 2016",
            "description": "Use MS Visio to draw the ERD and use MS Access to create table and build a database and finally useSQL Server to complete the whole database in the project Auto Sales System. This system is web based platform that assist customer to buy car from dealer and dealer to manage inventory",
            "images": ["./img/data.png"],
            "alt": ["data-mgmt"]
        },{
            "title": "Applied Data Science",
            "dates": "March 2016",
            "description": "Use R code to analyze a dataset, Denver Crime (2010-2015) from Denver Open Data Website",
            "images": ["./img/data-science.png"],
            "alt": ["data-science"]
        }]};

    window.projects = projects;

    function imagebuilder(prj){
        var img = HTMLimg.replace("%src%", projects.projects[prj].images[0]);
        img = img.replace("%alt%", projects.projects[prj].alt[0]);
        return img;
    }

    bio.display = function() {
        var role = HTMLspan.replace("%data%", bio.role);
        var name = HTMLh1.replace("%data%", bio.name);
        name = $(name).append(role)[0];
        var location = HTMLlocation.replace("%data%", bio.contacts.location);
        var email = HTMLemail.replace("%data%", bio.contacts.email);
        var github = HTMLgithub.replace("%data%", bio.contacts.github);
        var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var headerimg = imagebuilder(1);
        var skillarr = [];
        var skillset = $(document.createElement("i")).get(0);
        for(var i=0; i<bio.skills.length; i++){
            skillarr[i] = $(document.createElement("em")).html(bio.skills[i]).get(0);
            $(skillset).append($(skillarr[i]));
        }
        var skill = $(HTMLskill).append(headerimg, $(document.createElement("i")).html(bio.welcomeMessage), $(document.createElement("strong")).html("skills at a glance: "), $(skillset)).get(0);
        var basic = $(document.createElement("div")).addClass("basic").append($(location), $(email), $(document.createElement("br")), $(github), $(mobile), $(skill)).get(0);
        var header = $("header").append($(name), $(basic)).get(0);
        $("header .skill i:nth-child(4) em:nth-child(5)").before($(document.createElement("br")));

        var contacth1 = $(document.createElement("h1")).html("Let's Connect").get(0);
        $(".contact").append($(contacth1), $(location), $(email), $(document.createElement("br")), $(github), $(mobile))





    };
    bio.display();

    function ul_maker(li_num){
        var ul = $(document.createElement("ul"));
        for(var i=0; i<li_num; i++){
            ul.append($(document.createElement("li")));
        }
        return ul.get(0);
    }

    work.display = function(){
        var h1 = $(document.createElement("h1")).html("Work Experience").get(0);
        var h3 = $(document.createElement("h3")).html(work.jobs[0].title + " internship at " + work.jobs[0].employer).get(0);
        //console.log(h3);
        var span1 = $(document.createElement("span")).html(work.jobs[0].dates).get(0);
        var span2 = $(document.createElement("span")).html(work.jobs[0].location).get(0);
        //console.log(span2);
        var ul = ul_maker(2);
        $(ul).children("li").eq(0).html(work.jobs[0].description);
        //$(ul).children("li").eq(1).html(work.jobs[0].description[1]);
        //console.log(ul);
        var greyrock = $(HTMLgreyrock).append(h3, span1, span2, ul).get(0);
        return $(".experience").append($(h1), $(greyrock));
    };
    work.display();

    projects.display = function(){
        var temp = [];
        var h1 = $(document.createElement("h1")).html("Projects").get(0);
        for(var i = 0; i< projects.projects.length; i++){
            var h3 = $(document.createElement("h3")).html(projects.projects[i].title).get(0);
            var span = $(document.createElement("span")).html(projects.projects[i].dates).get(0);
            var ul = ul_maker(projects.projects[i].description.length);
            //for(var j = 0; j< projects.projects[i].description.length; j++){
                $(ul).children("li").eq(0).html(projects.projects[i].description).get(0);
            //}
            var image = imagebuilder(i);
            var subproject = $(HTMLsubproject).append($(h3), $(span), $(ul), $(image)).get(0);
            temp.push(subproject);
        }
        var temp1 = $(".projects").append($(h1));
        for(var k = 0; k < 5; k ++){
            temp1.append($(temp[k]));
        }
    };
    projects.display();

    education.display = function() {
        var temp = [];
        var h1 = $(document.createElement("h1")).html("Education").get(0);
        for(var i = 0; i < education.schools.length; i++){
            var h3 = $(document.createElement("h3")).html(education.schools[i].name).get(0);
            var span = $(document.createElement("span")).html(education.schools[i].dates + " " + education.schools[i].degree).get(0);
            var p = "";
            if(i !== education.schools.length-1){
                p = $(document.createElement("p")).html("Major: " + education.schools[i].majors[0]).get(0);
            }else{
                p = $(document.createElement("p")).html("").get(0);
            }
            //var p = $(document.createElement("p")).html("Major" + education[i].major).get(0);
            var a = $(document.createElement("a")).attr("href", "http://" + education.schools[i].url).html(education.schools[i].url).get(0);
            var sub = $(HTMLsubeducation).append($(h3), $(span), $(p), $(a)).get(0);
            temp.push(sub);
        }
        for(var j = 0; j < education.onlineCourses.length; j ++){
            var _h3 = $(document.createElement("h3")).html(education.onlineCourses[j].school).get(0);
            var _span = $(document.createElement("span")).html(education.onlineCourses[j].date);
            var _p = $(document.createElement("p")).html(education.onlineCourses[j].title);
            var _a = $(document.createElement("a")).attr("href", "http://" + education.onlineCourses[j].url).html(education.onlineCourses[j].url).get(0);
            var _sub = $(HTMLsubeducation).append($(_h3), $(_span), $(_p), $(_a)).get(0);
            temp.push(_sub);
        }

        var temp1 = $(".education").append($(h1)).get(0);
        for(var k=0; k<education.schools.length+education.onlineCourses.length; k++){
            $(temp1).append($(temp[k]));
        }
    };
    education.display();



});