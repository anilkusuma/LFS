'use strict';
module.exports = function(server) {
	var customeLib = require('../customlib.js');
	var path = require('path');
	var router = server.loopback.Router();
	var fs  = require('fs');
	router.get('/',function(req,res){
	    res.sendFile(path.resolve('../client/index.html'));
	});
	server.get('/getGalleryImages', function(req, res) {
		// var result = {};
		// result.folderName = 'Gallery';
		// customeLib.getFilesForGallery('../client/Gallery','/Gallery','Gallery',function(err,result){
		// 	if(err){
		// 		var response = {};
		// 		response.returnStatus = "ERROR"+err;
		// 		res.send(response);
		// 	}else{
		// 		var response = {};
		// 		response.returnStatus = "SUCCESS";
		// 		response.responseData = result;
		// 		console.log(JSON.stringify(result));
		// 		res.send(response);
		// 	}
		// });

		var dir = path.resolve('../client/Gallery');
        console.log('path value is ' + dir);
        var response = customeLib.readDirectry('../client/Gallery','/Gallery');
        if(customeLib.isEmptyObject(result)){
            var result={};
            result.responseData = response;
            result.returnStatus = "SUCCESS";
            res.send(result);
        }else{
            var result ={};
            result.returnStatus = "EMPTY";    
            res.send(result);
        }
	});
	server.use(router);
};
