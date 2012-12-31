
function ApplicationTabGroup(Window) {
	// what Templates does is return a nicely formated UI element 




	Templates = require ( 'CoreFiles/Templates');
var 	LoadedText = Templates('Label');
	var JsonProper =  Templates('SCView');
var	labelData = Templates('Label');
	labelData.text = ' Waiting for Data ';
var	JSONTe = Templates('Label');
	var viewContainer = Templates('SCview');
	var selfd = Ti.UI.createTabGroup();

var	 self = new Window(L('Player'));
var	 RawJson = new Window(L('Raw Json'));
var		win2 = new Window(L('Tech Info'));
	
	var tab1 = Ti.UI.createTab({
		title: ('Player'),
		icon : '/text/headphones.png',
		//icon: '/images/KS_nav_ui.png',
		window: self
	});
	
	self.containingTab = tab1;
	
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
		
	var better = Ti.UI.createScrollableView();
	
	win2.containingTab = tab2;
	RawJson.containingTab = tab3 ;

	
	selfd.addTab(tab1);
	selfd.addTab(tab2);
	selfd.addTab(tab3);

var	 label = Ti.UI.createTextField({
		color:'#000000',
		value : 'Search Here',

		height:'auto',
		width:'auto'
	});
	self.add(label);

	label.addEventListener('click', function(e) {

	});

var	 aButton = Ti.UI.createButton({
		title : 'Search',
		height :'auto' ,
		width : 'auto',
		top : label.top + 20 
	//	top : 'auto'*0.5,
		//left : 100
	});
	
	// Listen for click events.
	aButton.addEventListener('click', function() {
	LoadJson = require('CoreFiles/LoadJson');
	LoadJson (label.value,self,labelData,JSONTe,label,aButton);

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
	JSonProper.add(JSONTe);
	labelData.horizontalWrap = true ;
	
	viewContainer.add(labelData);
	
	self.add(aButton);
	
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
	return selfd;
};



module.exports = ApplicationTabGroup;

