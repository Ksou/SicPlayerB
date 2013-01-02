/**
 * @author Keith
 */
function AddMenu (){
var win = Ti.UI.createWindow({
  fullscreen: true
});

var activity = win.activity;

activity.onCreateOptionsMenu = function(e){
  var menu = e.menu;
  var menuItem = menu.add({ title: "Item 1" });
  menuItem.icon = "item1.png";
  menuItem.addEventListener("click", function(e) {
    Ti.API.debug("I was clicked");
  });
};

//win.open();
//TabGroup.add(win);
return win;

}
module.exports = AddMenu ; 