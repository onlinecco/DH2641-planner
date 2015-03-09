var mainController = function(mainV, dayV, addActivityC){
	
	mainV.addDayButton.click(function(){
		dayV.addDay();
	});
	
	mainV.createActivityButton.click(function(){
		addActivityC.addActivityButton();
	});


}