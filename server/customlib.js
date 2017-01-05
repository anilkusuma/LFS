module.exports.isEmptyObject = function(obj) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          return false;
        }
      }
      return true;   
 };
module.exports.getRandom = function(length) {
    return Math.floor(Math.pow(10, length-1) + Math.random() * 9 * Math.pow(10, length-1)); 
};

module.exports.validateCookies = function(req,callback){
	var app = require('./server.js');
	var customLib = require('./customlib.js');
    if(req.query.validator != undefined && req.query.selector != undefined && req.query.loginId != undefined){
		app.models.Validator.find({where:{'and':[{'validator':req.query.validator},{'selector':req.query.selector}]},include:'login'},function(err,instance){       			
			if(instance.length !== 0){
                if(instance[0].loginId == req.query.loginId){
				    callback(true,JSON.stringify(instance[0]));
			     }else{
				    callback(false,null);
			     }
            }
            else{
                callback(false,null);
            }
 		});
	}else if(!customLib.isEmptyObject(req.headers.cookie)){
		console.log('inside cookies ' );
    	var lists = req.headers.cookie.split("; ");
        var cookies = {};
        for(i=0;i<lists.length;i++){
        	var c = lists[i].split("=");
			cookies[c[0]] = c[1];
            if(c.length>=2)
            	cookies[c[0]] = c[1];
		}
		app.models.Validator.find({where:{'and':[{'validator':cookies.validator},{'selector':cookies.selector}]},include:'login'},function(err,instance){       			
			if(instance.length !== 0){
                if(instance[0].loginId == cookies.userID){
				    callback(true,JSON.stringify(instance[0]));
			     }else{
				    callback(false,null);
			     }
            }
            else{
                callback(false,null);
            }
 		});
	} else{
		callback(false,null);
	}
};
module.exports.validateSelectors = function(validator,selector,userId,callback){
	var app = require('./server.js');
	var customLib = require('./customlib.js');
	app.models.VtsValidator.find({where:{'and':[{'validator':validator},{'selector':selector}]}},function(err,instance){ 
		if(instance.length !== 0){
			if(instance[0].userId == userId){
				callback(true);
			}
			else{
				callback(false);
			}
		}else{
			callback(false);
		}
	});
};
module.exports.readDirectry = function(path,dir){
    var result = {};
    var currentdir = dir;
    result.name = dir;
    result.files = [];
    result.directries = [];
	//var path = require('path');
	var app = require('./server.js');
	var customLib = require('./customlib.js');
	var fs  = require('fs');


    var files = fs.readdirSync(path,'utf8');

    for(var i=0;i<files.length;i++){
        var filePath = path+'/'+files[i];
        var stat = fs.statSync(filePath);
        // console.log('stat value is '+stat+ ' '+filePath+ ' ' + stat.isDirectory());
        if(stat && stat.isDirectory()){
            // console.log('inside if '+stat.isDirectory());
            dir = currentdir+'/'+files[i];
            result.directries.push(customLib.readDirectry(filePath,dir));
        }else {
             console.log('inside else '+stat.isDirectory()+' '+ext);
            var ext = files[i].substring(files[i].indexOf('.')+1); 
            console.log('inside else '+stat.isDirectory()+' '+ext);
            if(ext == 'png' || ext == 'jpg' || ext ==  'jpeg'){
                result.files.push(files[i]);
            }
        }
    }
    return result;
}; 


// module.exports.getFilesForGallery = function(dir,realPath,folderName,callback){
// 	var path = require('path');
// 	var app = require('./server.js');
// 	var customLib = require('./customlib.js');
// 	var fs  = require('fs');
// 	var files = [];
// 	var folder = {};
// 	var result = {};
// 	result.dirName = folderName;
// 	result.dirPath = dir;
// 	result.realPath = realPath;
// 	result.files = [];
// 	result.folders = [];
// 	fs.readdir(dir, function(err, list) {
// 		if (err){
// 			callback(err,result);
// 			return ;
// 		}
// 		var i = 0;
// 		(function next() {
// 			if(i>list.length){
// 				callback(err,result);
// 			}else{
// 				var file = list[i];
// 				if (!file){
// 					i=i+1;
// 					next();
// 					return;
// 				}
// 				var fullPath = dir + '/' + file;
// 				var realPath = result.realPath+'/'+file;
// 				fs.stat(fullPath, function(err, stat) {
// 					if (stat && stat.isDirectory()) {
// 						customLib.getFilesForGallery(fullPath,realPath,file,function(err,res){
// 							result.folders.push(res);
// 							i=i+1;
// 							next();
// 						});
// 					} else {
// 						result.files.push(file);
// 						i=i+1;
// 						next();
// 					}
// 				});
// 			}
// 		})();
// 	});
// };
