/**
 * @author Keith
 */
function AddMenu (){

var win = Titanium.UI.createWindow({
    navBarHidden: false,
    activity : {
        onCreateOptionsMenu : function(e) {
            var menu = e.menu;
            var menuItem = menu.add({ title : 'Contact' });
            menuItem.setIcon("text/email.png");
           
            menuItem.addEventListener('click', function(e) {
               var email = 'keith@beatquestgame.com' ;
               Titanium.Platform.openURL(email);
                // do something when the menu item is tapped
            });
        
                    var menuItemA = menu.add({ title : 'Contact' });
            menuItem.setIcon("text/site.png");
           
            menuItemA.addEventListener('click', function(e) {
               var site = 'http://www.beatquestgame.com' ;
               Titanium.Platform.openURL(site)
                // do something when the menu item is tapped
            });
        }
    }
	
	
	
});

//TabGroup.add(win);
return win;
}
module.exports = AddMenu ; 