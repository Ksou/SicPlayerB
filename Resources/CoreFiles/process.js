/**
 * @author Keith
 */

var JM ;
function Process(data,UiStuff){

//labelData.text = da ;
// self , label , aButton 
//DataFix = require('CoreFiles/DataFix');
// For the Json Array I add properties 
// in DataFix, this allows me to force rows to have 
//data =  DataFix(data);
var table = Titanium.UI.createTableView({

  data: data,

});
var RowNew = Titanium.UI.createTableViewRow({
	font:{fontSize:40} ,
	
title : " Back "	
	
});
//RowNew.font.fontSize
table.appendRow(RowNew);


table.addEventListener('click', function(e){

if(e.index == (table.data[0].rows.length - 1))
{

BackE (UiStuff,table);
//BackE(label,aButton);
//function(){
}	
else
{
JM = false ; 
if(data[e.index].color != 'blue')
{
//	alert('hmm');
var Closer = data[e.index].permalink_url; 
var Sounder = Closer + '/'  + "/download.mp3" ;
}
else

{
	 JM = true ; 
	 var 
Sounder ='http://storage-new.newjamendo.com/download/track/'+data[e.index].id+'/mp32';
	//alert(Sounder);
}
if(data[e.index].downloadable == false){
	alert(" Sorry we can't play :" + data[e.index] .title);
}
else
{
	//alert('Trying to Play '+ data[e.index] .title );
MusicPlayer = require('CoreFiles/MusicPlayer');
MusicPlayer(Sounder,data[e.index],JM); 
}

}});
	
	UiStuff.self.remove(UiStuff.label);
	UiStuff.self.remove(UiStuff.aButton);



// NOTE for all who view this code, I didn't want to have to 
// pass the 
	//self.remove(self.children[i]);	
	
	//}
	//return old ; 
	
	UiStuff.self.add(table);
	//alert(data.type);
//	alert(data[1]);
}
function BackE (UiStuff,table){
UiStuff.self.remove(table);
//	self.remove(self.children[0]);
	UiStuff.self.add(UiStuff.label);
	UiStuff.self.add(UiStuff.aButton);
	//}
	
}

module.exports = Process ; 
//var old ;