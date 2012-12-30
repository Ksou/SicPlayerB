/**
 * @author Keith
 */
function DataFix(data){
// we add these properties on the entire array since
// after we render the table we can't make changes to individual rows on android 
data.prop = 'font';
data.prop = 'color';
data.prop = 'backgroundColor';
//data.prop = 'backgroundGradient';
///
data.prop = 'rightImage';
data.prop = 'backgroundImage';

//leftImage 
///
//data.font.prop = 'fontSize';
for(var i = 0; i < data.length; i++)
{
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
	
  data[i].font = {fontSize: '17dp'};
}
return data ; 
}
module.exports = DataFix ; 
