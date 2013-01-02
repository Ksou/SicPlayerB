/**
 * @author Keith
 */




function LoadJson (trackL,UiStuff,altData)
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
	//alert(this.responseText);
	Process = require('CoreFiles/process');
	UiStuff.labelData.text = this.responseText ;
	var data = eval('('+ this.responseText +')');
	DataFix = require('CoreFiles/DataFix');
    data =  DataFix(data,false);
	json2txt = require('CoreFiles/json2txt');
	UiStuff.JSONTe.text =  json2txt(data,'') ;

	var dataPro = data.concat(altData);
	// remove elements we don't need ;
	//UiStuff= [UiStuff.self,UiStuff.label,UiStuff.aButton];
	Process(dataPro,UiStuff);
    }

    dlXhr.open('GET',urlPrime);

    dlXhr.send();
	dlXhr.onerror = function(){
		
	alert( " Can not establish a connection , please verify your internet connection and try again ");		
		
	}	
}

module.exports = LoadJson;