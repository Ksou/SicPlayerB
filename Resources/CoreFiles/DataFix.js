/**
 * @author Keith
 */
function DataFix(data,Convert){
	
// we add these properties on the entire array since
// after we render the table we can't make changes to individual rows on android 
data.prop = 'font';
data.prop = 'color';
data.prop = 'backgroundColor';
//data.prop = 'backgroundGradient';
///
//var Convert ; 
var username ; 
data.prop = 'rightImage';
data.prop = 'backgroundImage';
var user = [username];

if(Convert)
{
	data.prop = 'user' ;
	
	
	//data[i].prop = 'username' ;
	//alert('yo');
	data.prop = 'downloadable' ;
	data.prop = 'title';
//Convert = true ; 	
	
}
//leftImage 
///
//data.font.prop = 'fontSize';
for(var i = 0; i < data.length; i++)
{
	//.user.username
	if(Convert){
	//	data.user.prop = 'username';
		//data[i].user.username = "JM Artist";
	data[i].downloadable = true ;
		data[i].title = data[i].name ; 
	}
	//data[i].backgroundImage = data[i].waveform_url ;
	
	if(data[i].downloadable == true){
	data[i].color = 'green';
	data[i].rightImage = 'text/vON.png' ;
	//data[i].backgroundColor = 'green';
	
	//data[i].backgroundGradient = BackGreen ;
	
	}
	else
	{
		data[i].rightImage = 'text/vOFF.png';
//		data[i].backgroundColor = 'red';
	data[i].color = 'red';	
	//	data[i].backgroundGradient = BackRed ;
	}
	
	if(Convert){
		
		data[i].color = 'blue';
	}
	
  data[i].font = {fontSize: '17dp'};
}
return data ; 
}
module.exports = DataFix ; 
