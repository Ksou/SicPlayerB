/**
 * @author Keith
 */
function TextLoad (TextPath) {
// this , since we run a return
var readContents;
var dir = Ti.Filesystem.getResourcesDirectory ();     
var readFile = Ti.Filesystem.getFile( dir + (TextPath));        
var LoadFail ; 
if (readFile.exists()) {
     readContents = readFile.read();
    
LoadFail = false ;

}
else
{
	LoadFail = true ;
//readContents = ' About.txt failed to load '	
	//;
}
 
 if(LoadFail){
 	var ReturnMe = 'Failed to load text';
 	return 	ReturnMe  ; 
 
 }
 else
 {
return readContents.text;
}

	
}
module.exports = TextLoad;