var mainController = function(mainV, dayV, addActivityV){
	
	mainV.addDayButton.click(function(){
		dayV.addDay();
	});
	
	mainV.addActivityButton.click(function(){
		addActivityV.addActivity();
	});
	
	mainV.cancelActivityButton.click(function(){
		addActivityV.cancelActivity();
	});

	mainV.createActivityButton.click(function(){
		addActivityV.createActivity();
	});

}