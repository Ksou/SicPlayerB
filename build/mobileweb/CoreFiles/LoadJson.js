/**
 * @author Keith
 */
function LoadJson (trackL,self,labelData,JSONTe,label,aButton)
{
	
	//labelData.text = " Yo";
alert("Please Wait , this operation can take a while");	
	
TextLoad = require('CoreFiles/TextLoad');
    
var SCid = TextLoad('text/SCid.txt');	
// I can't post my API key on GitHub...	, So make sure to get an API key and place it in text/SCid.txt
 // var urlPrime = "http://api.soundcloud.com/tracks/" + trackL ;
  var urlPrime = "http://api.soundcloud.com/tracks.json?client_id=" + SCid +" &q= " + trackL + "&limit=15";
    var dlXhr = Titanium.Network.createHTTPClient({
        timeout : 500000});

    dlXhr.onload = function(){
	//	var data = JSON.parse(this.responseData).data; 
	Process = require('CoreFiles/process');
	labelData.text = this.responseText ;
	var data = eval('('+ this.responseText +')');
	json2txt = require('CoreFiles/json2txt');
	JSONTe.text =  json2txt(data,'') ;
	
	
	Process(data,self,label,aButton);
    }

    dlXhr.open('GET',urlPrime);

    dlXhr.send();
	dlXhr.onerror = function(){
		
	alert( " Can not establish a connection , please verify your internet connection and try again ");		
		
	}	
}

module.exports = LoadJson;