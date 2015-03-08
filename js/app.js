$(function() {
	var model = new Model();

	var day = new dayView($("#dayViewWrapper"));
	var dayContr = new dayController(day);
	
	var main = new mainView($("#mainView"));
	var mainContr = new mainController(main,day);

	var activities = new activitiesView($("#activitiesView"));
	var activitiesContr = new activitiesController(activities);
	
	
	var addActivity = new addActivityView($("#addActivityView"));
	var addActivityContr = new addActivityController(addActivity);

});