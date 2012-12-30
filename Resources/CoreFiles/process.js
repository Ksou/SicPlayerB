/**
 * @author Keith
 */


function Process(data,self,label,aButton){

//labelData.text = da ;

DataFix = require('CoreFiles/DataFix');
// For the Json Array I add properties 
// in DataFix, this allows me to force rows to have 
data =  DataFix(data);
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
//alert(" Going Back ") ;
//BackE = require('ui/common/ApplicationTabGroup');

BackE (self,label,aButton,table);
//BackE(label,aButton);
//function(){
}	
else
{
var Closer = data[e.index].permalink_url; 

var Sounder = Closer + '/'  + "/download.mp3" ;

if(data[e.index].downloadable == false){
	alert(" Sorry we can't play :" + data[e.index] .title);
}
else
{
	//alert('Trying to Play '+ data[e.index] .title );
MusicPlayer = require('CoreFiles/MusicPlayer');
MusicPlayer(Sounder,data[e.index]); 
}

}});
	
	self.remove(label);
	self.remove(aButton);
	


// NOTE for all who view this code, I didn't want to have to 
// pass the 
	//self.remove(self.children[i]);	
	
	//}
	//return old ; 
	
	self.add(table);
	//alert(data.type);
//	alert(data[1]);
}
function BackE (self,label,aButton,table){
self.remove(table);
//	self.remove(self.children[0]);
	self.add(label);
	self.add(aButton);
	//}
	
}

module.exports = Process ; 
//var old ;