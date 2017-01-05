app.factory('GalleryService',['$http',function($http){
    var currentDir = '';
    var totalImages = {};
    var GalleryServices = {};
    var dirObject = {};
    GalleryServices.resetGalleryVariables = function(){
        currentDir = '';
        totalImages = {};
    };
    GalleryServices.getTotalImages = function(){
        return totalImages;
    };
    GalleryServices.setTotalImages = function(ti){
        totalImages = ti;
    };
    GalleryServices.getCurrentDir = function(){
        return currentDir;
    };
    GalleryServices.setCurrentDir = function(cd){
        currentDir = cd;
    };
    GalleryServices.getDirObject = function(){
        return dirObject;
    };
    GalleryServices.setDirObject = function(dO){
        dirObject = dO;
    };
    GalleryServices.getGalleryImages = function(callback){
        var url = '/getGalleryImages';
        $http({
            method: 'GET',
            url: url
        }).then(function successCallback(response) {
            callback(response.data.returnStatus,response.data.responseData);
        },function errorCallback(response) {
            callback("ERROR");
        });
    };
    GalleryServices.returnDirObject= function(dirObj,name){
        //console.log('inside returnObject '+dirObj+' '+name);
        for(var i=0;i<dirObj.directries.length;i++){
            var names = dirObj.directries[i].name.split('/');
            //console.log('inside if of return object '+names[names.length-1]+' '+name);
            if(names[names.length-1] == name){
                return dirObj.directries[i];
            }
        }
    };
    return GalleryServices;
}]);

app.controller('galleryCtr', ['$http','$rootScope','GalleryService','$scope','$timeout',function ($http,$rootScope,GalleryService,$scope,$timeout) {
    $rootScope.AndroidText = 'Gallery'
    $timeout(function(){
        $('nav li').removeClass('active');
        $('.gallary').addClass('active');
    },0,false);
    
    $scope.getImages = function(){
        GalleryService.getGalleryImages(function(status,images){
            console.log('returns tatus and mails are '+status+ ' '+images);
            GalleryService.resetGalleryVariables();
            GalleryService.setTotalImages(images);
            $scope.images = images;
            $scope.displayCurrentDirectoryImages(images);
        });
    };
    $scope.displayCurrentDirectoryImages = function(dir){
        //console.log('current dir is '+JSON.stringify(dir));
        GalleryService.setCurrentDir(dir);
        var directories = [];
        $scope.dir = dir;
        for(var i=0;i<dir.directries.length;i++){
            var name = dir.directries[i].name.split('/');
            var newname = name[name.length-1].toTitleCase();
            var filesLength = dir.directries[i].files.length;
            if(filesLength > 3){
                dir.directries[i].newName = newname;
                dir.directries[i].fileBig = parseInt(Math.random()*filesLength);
                dir.directries[i].secondFile = parseInt(Math.random()*filesLength);
                dir.directries[i].thirdFile = parseInt(Math.random()*filesLength);
                directories.push(dir.directries[i]);
            }
        }     
        $scope.folders = directories;
        $scope.files = dir.files;
        
        var justNames = dir.name.split('/');
        var names = [];
        GalleryService.setDirObject(GalleryService.getTotalImages());
        for(var i=1;i<justNames.length;i++){
            //console.log('just names value is'+justNames[i]);
            var name = {};
            if(i==1){
                name.justName = justNames[i];
                name.dir = GalleryService.getTotalImages();
                names.push(name);
            }else{
                name.justName = justNames[i];
                GalleryService.setDirObject(GalleryService.returnDirObject(GalleryService.getDirObject(),justNames[i]));
                name.dir = GalleryService.getDirObject();
                //console.log('found dir'+name.dir);
                names.push(name);
            }
        }
        $scope.names = names;
        hidePreloader();
    };
    showPreloader();
    $scope.getImages();
}]);