var HTMLh1 = '<h1>%data%</h1>';
var HTMLspan = '<span> %data%</span>';
var HTMLbasic = '<div class="basic"></div>';
var HTMLlocation = '<span><i>location: </i>%data%</span>';
var HTMLemail = '<span><i>email: </i>%data%</span>';
var HTMLgithub = '<span><i>github: </i>%data%</span>';
var HTMLmobile = '<span><i>mobile: </i>%data%</span>';
var HTMLskill = '<span class="skill"></span>';
var HTMLimg = '<img src=%src% alt=%alt% />';
var HTMLi = '<i>%data%</i>';
var HTMLstrong = '<strong>%data%</strong>';
var HTMLem = '<em>%data%</em>';
var HTMLgreyrock = '<div class="greyrock"></div>';
var HTMLsubproject = '<div class="sub-project"></div>';
var HTMLsubeducation = '<div class="sub-education"></div>';


//function initializeMap() {
//
//    /*-----------------------------------------------Map Code-------------------------------------------------------------*/
//    var options={
//        center:{
//            lat: 43.039591,//纬度latitude
//            lng: -76.132600//经度longitude
//        },
//        zoom:12,
//        //maxZoom:15,
//        minZoom:7,
//        mapTypeId:google.maps.MapTypeId.ROADMAP
//    };
//    var element=$(".map-canvas").get(0);//引入map 画布
//    var map=new google.maps.Map(element,options);//创建地图
//    google.maps.InfoWindow.prototype.opened=false;
//    var info=[];
//    var markers=[];
//    var infoWindows=[];
//    function marker(name,lat,lng,address,category){
//        var marker= new google.maps.Marker({
//            id:name,
//            position:{
//                lat:lat,
//                lng:lng
//            },
//            category: category,
//            //icon:category,
//            map:map,//这里还是不要写成map:map.gMap
//            content:address,
//            lat:lat,
//            lng:lng
//        });
//        var categoryText;
//        switch(marker.category){
//            case "residence":
//                categoryText= "Home";
//                break;
//            case "MSTNM":
//                categoryText="Master of Science in Computer Systems";
//                break;
//            case "MSME":
//                categoryText="Master of Science in Mechanical Engineering";
//                break;
//        }
//        var infoWindow=new google.maps.InfoWindow({//现在infoWindow可以点一次打开，之后再点就无效了,不会重复打开很多window，关闭之后可以再打开
//            //content:marker.content,
//            id:marker.id,
//            content:categoryText+" : "+marker.id+"<br/>"+marker.content,
//            maxWidth:200
//        });
//        infoWindows.push(infoWindow);
//        /*-----------------------------------------marker click event---------------------------------------------------*/
//        google.maps.event.addListener(marker,"click",function(){
//            for(var i=0;i<info.length;i++){//点击任何一个marker都可以把之前点过的上一个marker的弹窗关闭，增强用户体验
//                info[i].opened=false;
//                info[i].close();
//            }
//            if(infoWindow.opened==false){
//                infoWindow.open(map,marker);
//            }
//            infoWindow.opened=true;
//            info.push(infoWindow);
//            map.setCenter({//点击任何一个marker，地图都能聚焦在这个marker上
//                lat:lat,
//                lng:lng
//            });
//            map.setZoom(options["zoom"]);//setZoom也能够回到初始缩放大小状态
//
//        });
//        /*-----------------------------------------infoWindow close-click event---------------------------------------------------*/
//        google.maps.event.addListener(infoWindow,"closeclick",function(){//infoWindow的弹窗关闭事件
//            infoWindow.opened=false;
//        });
//
//        markers.push(marker);
//        return marker;
//    }
//    //tableClickToMarker();
//    /*-----------------------------------------map click event---------------------------------------------------*/
//    google.maps.event.addListener(map,"click",function(){//点击地图上的任意位置可以关闭所有marker的infoWindow
//        if(info.length!==0){
//            info.forEach(function(value){
//                value.close();
//                value.opened=false;
//            });
//        }
//    });
//    /*-----------------------------------------map right-click event---------------------------------------------------*/
//    google.maps.event.addListener(map,"rightclick",function(){//map.setCenter()能让地图迅速定位回到初始位置
//        map.setCenter({
//            lat:options["center"]["lat"],
//            lng:options["center"]["lng"]
//        });
//        map.setZoom(options["zoom"]);//setZoom也能够回到初始缩放大小状态
//    });
//    //创建marker的方式 marker(name,lat,lng,address,type of location);type of location also means different markers
//    var marker1=marker("Home",42.997869,-76.128780,"121 Lafayette Rd,NY13205","residence");
//    var marker2=marker("Master of Science",43.038151,-76.133801,"Computer Systems Networking and Telecommunications","MSTNM");
//    var marker3=marker("Master of Science",43.037481,-76.132318,"Mechanical Engineering","MSME");
//}
//window.addEventListener('load', function(){
//    initializeMap();
//}, false);

var map;    // declares a global map variable
/*
 Start here! initializeMap() is called when page is loaded.
 */
function initializeMap() {

    var locations;

    var mapOptions = {
        disableDefaultUI: true
    };

    /*
     For the map to be displayed, the googleMap var must be
     appended to #mapDiv in resumeBuilder.js.
     */
    map = new google.maps.Map($(".map-canvas").get(0), mapOptions);


    /*
     locationFinder() returns an array of every location string from the JSONs
     written for bio, education, and work.
     */
    function locationFinder() {

        // initializes an empty array
        var locations = [];

        // adds the single location property from bio to the locations array
        locations.push(bio.contacts.location);

        // iterates through school locations and appends each location to
        // the locations array. Note that forEach is used for array iteration
        // as described in the Udacity FEND Style Guide:
        // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop


        education.schools.forEach(function(school){
            locations.push(school.location);
        });

        // iterates through work locations and appends each location to
        // the locations array. Note that forEach is used for array iteration
        // as described in the Udacity FEND Style Guide:
        // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
        work.jobs.forEach(function(job){
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

        // The next lines save location data from the search result object to local variables
        var lat = placeData.geometry.location.lat();  // latitude from the place service
        var lon = placeData.geometry.location.lng();  // longitude from the place service
        var name = placeData.formatted_address;   // name of the place from the place service
        var bounds = window.mapBounds;            // current boundaries of the map window

        // marker is an object with additional data about the pin for a single location
        var marker = new google.maps.Marker({
            map: map,
            position: placeData.geometry.location,
            title: name
        });

        // infoWindows are the little helper windows that open when you click
        // or hover over a pin on a map. They usually contain more information
        // about a location.
        var infoWindow = new google.maps.InfoWindow({
            content: name
        });

        // hmmmm, I wonder what this is about...
        google.maps.event.addListener(marker, 'click', function() {
            // your code goes here!
        });

        // this is where the pin actually gets added to the map.
        // bounds.extend() takes in a map location object
        bounds.extend(new google.maps.LatLng(lat, lon));
        // fit the map to the new marker
        map.fitBounds(bounds);
        // center the map
        map.setCenter(bounds.getCenter());
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
        locations.forEach(function(place){
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

/*
 Uncomment the code below when you're ready to implement a Google Map!
 */

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
    //Make sure the map bounds get updated on page resize
    map.fitBounds(mapBounds);
});
