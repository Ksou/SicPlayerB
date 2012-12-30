
function Templates(UiType)
{
// this function sends us back a nice well formated Scroll view or label , 
// This should allow us to cut Application.JS file to 100 lines max 
var UIelement = null ; 
if(UiType =='SCView' || UiType =='SCview')
{	UIelement = Titanium.UI.createScrollView({
    contentWidth: ('auto' ),
    contentHeight:'auto',
    top:55,
    showVerticalScrollIndicator:true,
   showHorizontalScrollIndicator:true
});


}
if(UiType == 'Button'){
	
UIelement =  Ti.UI.createButton({
		title : 'Get Data',
		height :'auto' ,
		width : 'auto',
		top :  66 

	});	
	
}


if(UiType =='Label'|| UiType == 'label' )
	{
/*		
UIelement =	 Titanium.UI.createLabel({
        color:'black',
   //  text : 'Waiting for Data ' , 
      font:{fontSize:20,fontFamily:'Helvetica Neue'}, 
   height : 'auto',
	horizontalWrap : true 
    });	
	*/	
UIelement = 	Titanium.UI.createLabel(
 {
 
 	color :'black',	
 	font : {fontSize : '17dp',fontFamily:'Helvetica Neue'}
 }
 );
		
	}
	if(UiType == 'textF'|| UiType == 'textf')
	{
UIelement = Ti.UI.createTextField({
		color:'#000000',
	//	value : 'Search Here',

		height:'auto',
		width:'auto'
	});	
	
	
	
	}
	
	return UIelement ; 
}
module.exports = Templates;