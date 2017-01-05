app.controller('acadCtr',['$scope','$rootScope','$timeout',function($scope,$rootScope,$timeout){
    showPreloader();
    $timeout(function(){
        $('nav li').removeClass('active');
        $('.activities,.AcadAc').addClass('active');
    },0,false);
    var initSliders = function(){
        $("#science-carousel,#maths-carousel,#social-carousel,#language-carousel").owlCarousel({
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
    var initHome = function(){
        $timeout(initSliders,0,true);
    };
    initHome();
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
app.controller('extraCtr',['$scope','$rootScope','$timeout',function($scope,$rootScope,$timeout){
	showPreloader();
	$timeout(function(){
        $('nav li').removeClass('active');
        $('.activities,.ExtraAc').addClass('active');
    },0,false);
    var initSliders = function(){
        $("#guntur-carousel").owlCarousel({
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
    var initHome = function(){
        $timeout(initSliders,0,true);
    };
    initHome();
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
app.controller('socialCtr',['$scope','$rootScope','$timeout',function($scope,$rootScope,$timeout){
    showPreloader();
    $timeout(function(){
        $('nav li').removeClass('active');
        $('.activities,.SocailAc').addClass('active');
    },0,false);
    var initSliders = function(){
        $("#flood-carousel,#chirstmas-carousel,#visitpoor-carousel").owlCarousel({
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
    var initHome = function(){
        $timeout(initSliders,0,true);
    };
    initHome();
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




