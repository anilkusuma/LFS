app.controller('aboutCtr',['$scope','$rootScope','$timeout',function($scope,$rootScope,$timeout){
    showPreloader();
    $timeout(function(){
        $('nav li').removeClass('active');
        $('.aboutus,.aboutusli').addClass('active');
    },0,false);
    var total_images = $("body img").length;
    var images_loaded = 0;
    $("body").find('img').each(function() {
        var fakeSrc = $(this).attr('src');
        $("<img/>").attr("src", fakeSrc).css('display', 'none').on('load',function() {
            images_loaded++;
            if (images_loaded >= total_images) {
                hidePreloader();
            }
        });
    });
}]);
app.controller('historyCtr',['$scope','$rootScope','$timeout',function($scope,$rootScope,$timeout){
	showPreloader();
	$timeout(function(){
        $('nav li').removeClass('active');
        $('.aboutus').addClass('active');
        $('.history').addClass('active');
    },0,false);
    var intiCarsouel = function(){
	    $("#history_carousel,#history_correspondent_carousel,#history_sister_carousel").owlCarousel({
	        autoPlay: 3000, //Set AutoPlay to 3 seconds
	        items : 5,
	        itemsDesktop : [2000,5],
	        itemsDesktopSmall : true, // betweem 900px and 601px
	        itemsTablet: true, //2 items between 600 and 0
	        itemsMobile : true,
	        itemsScaleUp:true,
	        navigation:false,
	        pagination:true,
	        stopOnHover:true,
	        slideSpeed:500
	    });
    }
    var initIndex = function(){
        $timeout(intiCarsouel,0,true);
    }
    initIndex();
    var total_images = $("body img").length;
    var images_loaded = 0;
    $("body").find('img').each(function() {
        var fakeSrc = $(this).attr('src');
        $("<img/>").attr("src", fakeSrc).css('display', 'none').on('load',function() {
            images_loaded++;
            if (images_loaded >= total_images) {
                hidePreloader();
            }
        });
    });
    //hidePreloader();
}]);
app.controller('managementCtr',['$scope','$rootScope','$timeout',function($scope,$rootScope,$timeout){
    showPreloader();
    $timeout(function(){
        $('nav li').removeClass('active');
        $('.aboutus,.management').addClass('active');
    },0,false);
    var total_images = $("body img").length;
    var images_loaded = 0;
    $("body").find('img').each(function() {
        var fakeSrc = $(this).attr('src');
        $("<img/>").attr("src", fakeSrc).css('display', 'none').on('load',function() {
            images_loaded++;
            if (images_loaded >= total_images) {
                hidePreloader();
            }
        });
    });
}]);
app.controller('visionCtr',['$scope','$rootScope','$timeout',function($scope,$rootScope,$timeout){
    showPreloader();
    $timeout(function(){
        $('nav li').removeClass('active');
        $('.aboutus,.vismis').addClass('active');
    },0,false);
    var total_images = $("body img").length;
    var images_loaded = 0;
    $("body").find('img').each(function() {
        var fakeSrc = $(this).attr('src');
        $("<img/>").attr("src", fakeSrc).css('display', 'none').on('load',function() {
            images_loaded++;
            if (images_loaded >= total_images) {
                hidePreloader();
            }
        });
    });
}]);



