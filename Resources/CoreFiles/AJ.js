//function AJ (trackL,UiStuff){
function AJ (trackL,UiStuff){
//	alert(trackL);
	if ( trackL == null){
		alert('No Data ');
		
	}
	//var trackL = 'piano';
//var url = "https://www.appcelerator.com";
var url =	'http://api.jamendo.com/get2/name+id+url+artist/track/json/?searchquery='+
trackL+'=searchweight_desc';	

var xhr = Ti.Network.createHTTPClient({
    onload: function(e) {
        // this.responseText holds the raw text return of the message (used for JSON)
        // this.responseXML holds any returned XML (used for SOAP web services)
        // this.responseData holds any returned binary data
    
    
        
        Ti.API.debug(this.responseText);
        //alert('success');
    	//alert(this.responseText );
    	var data = eval('('+ this.responseText +')');
    	DataFix = require('CoreFiles/DataFix');
    	data =  DataFix(data,true);
    	LoadJson = require('CoreFiles/LoadJson');
		LoadJson (trackL,UiStuff,data);
    
    },
    onerror: function(e) {
        Ti.API.debug(e.error);
        alert('error');
    },
    timeout:5000
});

xhr.open("GET", url);
xhr.send();
}

module.exports = AJ;