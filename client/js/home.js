var app = angular.module('Home', ['ngRoute','ngCookies','ngTouch']);
app.config(['$routeProvider','$locationProvider','$provide','$sceDelegateProvider',function ($routeProvider,$locationProvider,$provide,$sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        'https://drive.google.com/**',
        'https://www.youtube.com/**'
    ]);
    $routeProvider
    .when('/', {
        templateUrl: '/modules/Home/Home.html',
        controller: 'homeCtr'
    })
    .when('/about', {
        templateUrl: '/modules/AboutUs/aboutus.html',
        controller: 'aboutCtr'
    })
    .when('/history',{
        templateUrl: '/modules/AboutUs/history.html',
        controller: 'historyCtr'
    })
    .when('/management',{
        templateUrl : '/modules/AboutUs/management.html',
        controller : 'managementCtr'
    })
    .when('/vision',{
        templateUrl:'/modules/AboutUs/vision.html',
        controller:'visionCtr'
    })
    .when('/affiliations',{
        templateUrl:'/modules/Affiliations/affiliations.html',
        controller:'affCtr'
    })
    .when('/calender',{
        templateUrl:'/modules/Affiliations/calender.html',
        controller:'calCtr'
    })
    .when('/admissions',{
        templateUrl:'/modules/Admissions/admissions.html',
        controller:'admCtr'
    })
    .when('/enquiry',{
        templateUrl:'/modules/Admissions/enquiry.html',
        controller:'enquiryCtr'
    })
    .when('/achievements',{
        templateUrl : '/modules/Achievements/achievements.html',
        controller : 'achCtr'
    })
    // .when('/activities',{
    //     templateUrl : '/modules/Activities/activities.html',
    //     controller : 'actCtr'
    // })
    .when('/facilities',{
        templateUrl : '/modules/Facilities/facilities.html',
        controller : 'facCtr'
    })
    .when('/contact',{
        templateUrl : '/modules/Contact/contact.html',
        controller : 'contactCtr'
    })
    .when('/gallery',{
        templateUrl : '/modules/Gallery/gallery.html',
        controller : 'galleryCtr'
    })
    .when('/acadamic',{
        templateUrl : '/modules/Activities/acadamic.html',
        controller : 'acadCtr'
    })
    .when('/social',{
        templateUrl : '/modules/Activities/social.html',
        controller : 'socialCtr'
    })
    .when('/extracuricular',{
        templateUrl : '/modules/Activities/extra.html',
        controller : 'extraCtr'
    })
    .otherwise({
        redirectTo :  '/'
    });


    $locationProvider.html5Mode(true);
}]);
app.factory('RootSer',['$http','$rootScope',function($http,$rootScope){
    var RootSers = {};

    return RootSers;
}]);

app.controller('HomeMain',['$scope','$rootScope','$http','$location','$window','$cookies','$timeout','RootSer',function($scope,$rootScope,$http,$window,$location,$cookies,$timeout,RootSer){
    showPreloader();
    var intiScrollr = function(){
        var s = skrollr.init({forceHeight: false});
    }
    var initIndex = function(){
        $timeout(intiScrollr,0,true);
    }
    initIndex();
}]);

app.controller('homeCtr',['$scope','$rootScope','$timeout',function($scope,$rootScope,$timeout){
    showPreloader();
    $timeout(function(){
        $('nav li').removeClass('active');
        $('.home').addClass('active');
    },0,false);
    var initSliders = function(){
        $("#rev_slider").show().revolution({
            sliderType:"standard",
            sliderLayout:"fullscreen",
            dottedOverlay:"none",
            delay:2000,
            navigation: {
                keyboardNavigation: 'on',
                keyboard_direction: 'horizontal',
                mouseScrollNavigation: 'off',
                mouseScrollReverse: 'reverse',
                onHoverStop: 'off',
                arrows: {
                    enable: true,
                    style: 'hesperiden',
                    rtl: false,
                    hide_onleave: false,
                    hide_onmobile: true,
                    hide_under: 0,
                    left: {
                        container: 'slider',
                        h_align: 'left',
                        v_align: 'center',
                        h_offset: 20,
                        v_offset: 0
                    },
                    right: {
                        container: 'slider',
                        h_align: 'right',
                        v_align: 'center',
                        h_offset: 20,
                        v_offset: 0
                    }
                },
                bullets: {
                    enable: true,
                    style: 'hesperiden',
                    direction: 'horizontal',
                    rtl: false,
                    container: 'slider',
                    h_align: 'center',
                    v_align: 'bottom',
                    h_offset: 0,
                    v_offset: 20,
                    space: 5,
                    hide_onleave: true,
                    hide_onmobile: false,
                    hide_under: 0
                },
                touch: {
                    touchenabled: 'on',
                    swipe_threshold: 75,
                    swipe_min_touches: 1,
                    swipe_direction: 'horizontal',
                    drag_block_vertical: true
                }
            },
            responsiveLevels:[1240,1024,778,480],
            visibilityLevels:[1240,1024,778,480],
            gridwidth:[1240,1024,778,480],
            gridheight:[768,668,960,720],
            lazyType:"single",
            parallax: {
                origo:"mouse+scroll",
                speed:400,
                levels: [5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
                disable_onmobile: 'on'
            },
            spinner:"off",
            shuffle:"off",
            autoHeight:"off",
            fullScreenAutoWidth:"off",
            fullScreenAlignForce:"off",
            fullScreenOffsetContainer: "",
            fullScreenOffset: "0",
            disableProgressBar:"on",
            hideThumbsOnMobile:"off",
            hideSliderAtLimit:0,
            hideCaptionAtLimit:0,
            hideAllCaptionAtLilmit:0,
            debugMode:false,
            fallbacks: {
                simplifyAll:"off",
                nextSlideOnWindowFocus:"off",
                disableFocusListener:false,
            }
        });
        $("#usps-carousel").owlCarousel({
            autoPlay: 3000, //Set AutoPlay to 3 seconds
            items : 5,
            itemsDesktop : [2000,3],
            itemsDesktopSmall : false, // betweem 900px and 601px
            itemsTablet: false, //2 items between 600 and 0
            itemsMobile : false,
             itemsScaleUp:true,
             navigation:false,
             pagination:true,
            stopOnHover:true,
            slideSpeed:500
        });
        $("#news-carousel").owlCarousel({
            autoPlay: 3000, //Set AutoPlay to 3 seconds
            items : 5,
            itemsDesktop : [2000,3],
            itemsDesktopSmall : false, // betweem 900px and 601px
            itemsTablet: false, //2 items between 600 and 0
            itemsMobile : false,
            itemsScaleUp:true,
            navigation:false,
            pagination:true,
            stopOnHover:true,
            slideSpeed:500
        });
        $("#events-carousel").owlCarousel({
            autoPlay: 3000, //Set AutoPlay to 3 seconds
            items : 5,
            itemsDesktop : [2000,4],
            itemsDesktopSmall : false, // betweem 900px and 601px
            itemsTablet: false, //2 items between 600 and 0
            itemsMobile : false,
            itemsScaleUp:true,
            navigation:false,
            pagination:true,
            stopOnHover:true,
            slideSpeed:500
        });

    };
    function initializeMap() {
        var styles = [
            {
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#444444"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#f2f2f2"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#46bcec"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            }
        ];

        // Create a new StyledMapType object, passing it the array of styles,
        // as well as the name to be displayed on the map type control.
        var styledMap = new google.maps.StyledMapType(styles, {
            name: "Styled Map"
        });

        var myLatLng = new google.maps.LatLng(16.320340, 80.426936);

        // Create a map object, and include the MapTypeId to add
        // to the map type control.
        var mapOptions = {
            zoom: 15,
            center: myLatLng,
            mapTypeControlOptions: {
                mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
            },
            scrollwheel: false,
            draggable: false
        };
        var map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);
        $scope.map = map;

        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map
        });

        //Associate the styled map with the MapTypeId and set it to display.
        map.mapTypes.set('map_style', styledMap);
        map.setMapTypeId('map_style');

    };
    var initHome = function(){
        $timeout(initSliders,0,true);
        $timeout(initializeMap,0,true);
    };
    var total_images = $("body img").length;
    var images_loaded = 0;
    $("body").find('img').each(function() {
        var fakeSrc = $(this).attr('src');
        $("<img/>").attr("src", fakeSrc).css('display', 'none').on('load',function() {
            images_loaded++;
            if (images_loaded >= total_images) {
                hidePreloader();
                $timeout(function(){google.maps.event.trigger($scope.map, 'resize');},0,true);
            }
        });
    });
    initHome();
    hidePreloader();
}]);
app.controller('contactCtr',['$scope','$rootScope','$timeout',function($scope,$rootScope,$timeout){
    showPreloader();
    $timeout(function(){
        $('nav li').removeClass('active');
        $('.contactus').addClass('active');
    },0,false);
    function initializeMap() {
        var styles = [
            {
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#444444"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#f2f2f2"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#46bcec"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            }
        ];

        // Create a new StyledMapType object, passing it the array of styles,
        // as well as the name to be displayed on the map type control.
        var styledMap = new google.maps.StyledMapType(styles, {
            name: "Styled Map"
        });

        var myLatLng = new google.maps.LatLng(16.320340, 80.426936);

        // Create a map object, and include the MapTypeId to add
        // to the map type control.
        var mapOptions = {
            zoom: 15,
            center: myLatLng,
            mapTypeControlOptions: {
                mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
            },
            scrollwheel: false,
            draggable: false
        };
        var map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);
        $scope.map = map;

        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map
        });

        //Associate the styled map with the MapTypeId and set it to display.
        map.mapTypes.set('map_style', styledMap);
        map.setMapTypeId('map_style');
    };
    var initContact = function(){
        $timeout(initializeMap,0,true);
        hidePreloader();
        $timeout(function(){google.maps.event.trigger($scope.map, 'resize');},0,true);
    }
    initContact();
    
}]);



