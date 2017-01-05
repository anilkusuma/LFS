app.controller('achCtr',['$scope','$rootScope','$timeout',function($scope,$rootScope,$timeout){
    $timeout(function(){
        $('nav li').removeClass('active');
        $('.achievements').addClass('active');
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