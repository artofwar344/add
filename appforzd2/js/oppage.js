function getParam (url,par){
  if( url.split('?').length <2 ){
      return false
  }
   var urlsearch = url.split('?');
   var pstr = urlsearch[1].split('&');
   for (var i = pstr.length - 1; i >= 0; i--) {
       var tep = pstr[i].split("=");
       if(tep[0] == par){
           return tep[1];
       }
   }
   return(false);
}