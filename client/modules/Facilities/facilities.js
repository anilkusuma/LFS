app.controller('facCtr',['$scope','$rootScope','$timeout',function($scope,$rootScope,$timeout){
    showPreloader();
    $timeout(function(){
        $('nav li').removeClass('active');
        $('.facilities').addClass('active');
    },0,false);
    var initSliders = function(){
    	$("#rev_slider_fac,#rev_slider_act").show().revolution({
	        sliderType:"standard",
	        sliderLayout:"fullscreen",
	        dottedOverlay:"none",
	        delay:4000,
	        navigation: {
	            keyboardNavigation: 'on',
	            keyboard_direction: 'vertical',
	            mouseScrollNavigation: 'on',
	            mouseScrollReverse: 'normal',
	            onHoverStop: 'on',
	            arrows: {
	                enable: false
	            },
	            bullets: {
	                enable: true,
	                style: 'hermes',
	                direction: 'vertical',
	                rtl: false,
	                container: 'slider',
	                h_align: 'right',
	                v_align: 'center',
	                h_offset: 5,
	                v_offset: 0,
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
	        fullScreenOffset: "0px",
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
    };
    var initHome = function(){
        //hidePreloader();
        $timeout(initSliders,0,true);
    };
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
    initHome();
}]);