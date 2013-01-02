/**
 * @author Keith
 */ //var old ; 
function MusicPlayer (Song,SongMeta,JM){	
	
	
	
	
	if( Ti.Platform.osname == 'android'){
 	
	var	RowPlay = Ti.Media.createAudioPlayer({url : Song, allowBackground: true});
	//RowPlay.STATE_PLAYING
	//	RowPlay.allowBackground = true ; 

}
	 
	  var SongInfo = Ti.UI.createAlertDialog({
	  //	persistent : true ,
    cancel: 1,
   // buttonNames: ['Artist_Page', 'Close', 'Pause'],
   // I can't stop the dialog from going away when a button is pressed
   // So instead
     buttonNames: ['Artist Page', 'Close'],
   
    //message: 'By : '+ SongMeta.user.username ,
   
    title: SongMeta.title 
  });
//  SongInfo.setPersistent(true);
 	SongInfo.addEventListener('click', function(e){
    if (e.index === 1){
    SongInfo.hide();
    if(RowPlay){
    RowPlay.stop();
    RowPlay.release();
    }
    }
  //  if(e.index == e.source.Artist_Page){
    if(e.index == 0)	{
    if(RowPlay){
    	//RowPlay.allowBackground = true ; 
    RowPlay.stop();
    RowPlay.release();
    }
    
    if(SongMeta.user)
   {
   	
   	var SGu = SongMeta.user.permalink_url ;
 //http:\/\/www.jamendo.com\/en\/artist\/
    	
    }
    	else
    	{
    		//	alert('No meta');
    	  	var SGU =  "http://www.jamendo.com/en/"; 
    
    }
    //	SGu = SGu + "";
    	//alert(SGu);
    	Titanium.Platform.openURL(SGu);
      
    }
    if(e.index == 2){
   // this does nothing right now , originally I wanted to 
   // create a button in the SongInfo dialog that allowed you to pause
   // and resume the song , but since pressing a button hides the dialog theirs no way to resume the song
      if(RowPlay){
    	//RowPlay.allowBackground = true ; 
    RowPlay.stop();
    RowPlay.release();
    }

    	/*
    	if( Ti.Platform.osname == 'android'){
    	//RowPlay.
    	//var PlayState = RowPlay.;
    	var PlayState = true ; 
    	if(PlayState)
    	{
    		PlayState = false ;
    		RowPlay.pause();
    	}
    	else
    	{ PlayState = true ; 
    	RowPlay.play();
    	}
    	}
      */
      
      }
    
  });
  SongInfo.show()
		if( Ti.Platform.osname == 'android'){
 	
	RowPlay.play();
	// = Ti.Media.createAudioPlayer({url : Song});
}
	
	
	
	}
function TimeOut() {
//	
	
	
}	
	
	module.exports = MusicPlayer ;