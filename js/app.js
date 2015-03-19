$(function() {


	var day = new dayView($("#dayViewWrapper"));
	var dayContr = new dayController(day);
	
	var addActivity = new addActivityView($("#addActivityView"),model);
	var addActivityContr = new addActivityController(addActivity);
	
	var main = new mainView($("#mainView"));
	var mainContr = new mainController(main,day,addActivityContr);

	var activities = new activitiesView($("#activitiesView"));
	var activitiesContr = new activitiesController(activities);
	
	createTestData();

});