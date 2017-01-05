app.controller('admCtr',['$scope','$rootScope','$timeout',function($scope,$rootScope,$timeout){
    $timeout(function(){
        $('nav li').removeClass('active');
        $('.admissions,.admission').addClass('active');
    },0,false);
    showPreloader();
    hidePreloader();
}]);
app.controller('enquiryCtr',['$scope','$rootScope','$timeout',function($scope,$rootScope,$timeout){
	$timeout(function(){
        $('nav li').removeClass('active');
        $('.admissions,.enquiryform').addClass('active');
    },0,false);
    hidePreloader();
}]);