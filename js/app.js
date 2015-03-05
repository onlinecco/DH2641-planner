$(function() {
	var model = new Model();
	
	var main = new mainView($("#mainView"));
	var mainContr = new mainController(main);

	var activities = new activitiesView($("#activitiesView"));
	var activitiesContr = new activitiesController(activities);
	
	var day = new dayView($("#dayView"));
	var dayContr = new dayController(day);
	
	var addActivity = new addActivityView($("#addActivityView"));
	var addActivityContr = new addActivityController(addActivity);

});