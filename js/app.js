$(function() {

	
	var addActivity = new addActivityView($("#addActivityView"),model);
	var addActivityContr = new addActivityController(addActivity);


	var day = new dayView($("#dayViewWrapper"),addActivityContr);
	var dayContr = new dayController(day);
	
	var activities = new activitiesView($("#activitiesView"),addActivityContr);
	var activitiesContr = new activitiesController(activities);


	
	var main = new mainView($("#mainView"));
	var mainContr = new mainController(main,day,addActivityContr);


	
	createTestData();

});