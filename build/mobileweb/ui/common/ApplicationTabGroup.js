function ApplicationTabGroup(Window) {
	// what Templates does is return a nicely formated UI element 
	Templates = require ( 'CoreFiles/Templates');
var UiStuff = ['self','labelData','JSONTe','label','aButton'];
// all I'm doing here is organizing our objects in an Array , we send this all over so...
var 	LoadedText = Templates('Label');
var JsonProper =  Templates('SCView');
	UiStuff.labelData = Templates('Label');
	UiStuff.labelData.text = ' Waiting for Data ';
	UiStuff.JSONTe = Templates('Label');
	var viewContainer = Templates('SCview');
	

	 UiStuff.self = new Window(L('Player'));
var	 RawJson = new Window(L('Raw Json'));
var		win2 = new Window(L('Tech Info'));
//var UiStuff = [self,labelData,JSONTe,label,aButton];
	var selfd = Ti.UI.createTabGroup();
	var tab1 = Ti.UI.createTab({
		title: ('Player'),
		icon : '/text/headphones.png',
		//icon: '/images/KS_nav_ui.png',
		window: UiStuff.self
	});
	//UiStuff.s
	UiStuff.self.containingTab = tab1;
	
	var tab2 = Ti.UI.createTab({
		title: ('Tech Info '),
		icon: 'text/pc.png',
		window: win2
	});
	var tab3 = Ti.UI.createTab({
		title: ('Raw Json '),
		icon: 'text/content.png',
		window: RawJson
	});
	
	//var better = Ti.UI.createScrollableView();
	
	win2.containingTab = tab2;
	RawJson.containingTab = tab3 ;

	
	selfd.addTab(tab1);
	selfd.addTab(tab2);
	selfd.addTab(tab3);

	UiStuff.label = Ti.UI.createTextField({
		color:'#000000',
		value : 'Search Here',

		height:'auto',
		width:'auto'
	});
	UiStuff.self.add(UiStuff.label);

	UiStuff.label.addEventListener('click', function(e) {

	});

	UiStuff.aButton = Ti.UI.createButton({
		title : 'Search',
		height :'auto' ,
		width : 'auto',
		top : UiStuff.label.top + 20 
	//	top : 'auto'*0.5,
		//left : 100
	});
	
	// Listen for click events.
	UiStuff.aButton.addEventListener('click', function() {
	AJ = require('CoreFiles/AJ');
	AJ (UiStuff.label.value,UiStuff);
	
	
	
	

	});

	var view1 = Templates('SCView');

	var JSonProper =  Templates('SCView');

	RawJson.addEventListener('click',function(){
		// what this does is change the RawJson view 
		// to a Human readable format 
		//
		//alert('double click');	
	if(JSonProper.visible){
		
	JSonProper.visible = false ;
	viewContainer.visible = true ;	
	tab3.title = " Raw Json ";
	
	}
	else
	
	{
	viewContainer.visible = false ; 
	JSonProper.visible = true ;	
	tab3.title = " Readable Json ";	
	}
	
	
	});
	JSonProper.add(UiStuff.JSONTe);
	UiStuff.labelData.horizontalWrap = true ;
	
	viewContainer.add(UiStuff.labelData);
	
	UiStuff.self.add(UiStuff.aButton);
	
var  LoadedText  = Templates('Label'); 

    TextLoad = require('CoreFiles/TextLoad');
    
	LoadedText.text = TextLoad('text/About.txt');
	//LoadedText.
	var LoadScroll =  Templates('SCView'); 
	
	LoadScroll.add(LoadedText);
	win2.add(LoadScroll);
	JSonProper.visible = false ;
	RawJson.add(JSonProper);
	RawJson.add(viewContainer)	;

	if( Ti.Platform.osname == 'android'){
		// don't know how , don't care
		
		//	AddMenu = require('CoreFiles/AddMenu');
	//var Context = AddMenu();
	}
	return selfd;
};



module.exports = ApplicationTabGroup;

