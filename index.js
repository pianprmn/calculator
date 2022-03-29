let outputScreen = document.getElementById('output-screen');

function display(num){
	outputScreen.Value += num; 
}
function Calculate(){
	try{
		outputScreen.Value = eval(outputScreen.Value);
	}
	catch (err)
	{
		alert("Invalid")
	}
}