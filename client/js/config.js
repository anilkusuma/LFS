var hidePreloader = function(option,callback){
    $("#page-loading").hide();
    $(".page-content,.headerBar").show();
};
var showPreloader = function(){
    $(".page-content,.headerBar").hide();
    $("#page-loading").show();
};
String.prototype.toTitleCase = function(){
  return this.replace(/\b(\w+)/g, function(m,p){ return p[0].toUpperCase() + p.substr(1).toLowerCase() })
}