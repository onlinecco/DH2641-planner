$(function() {
	var model = new Model();

	// some activities for testing the waitinglist
	var act1 = new Activity("some activity",20,1,"Some description");
	var act2 = new Activity("some activity",20,1,"Some description");
	var act3 = new Activity("some activity",20,1,"Some description");
	var act4 = new Activity("some activity",20,1,"Some description");

	model.addParkedActivity(act1);
	model.addParkedActivity(act2);
	model.addParkedActivity(act3);
	model.addParkedActivity(act4);

	var day = new dayView($("#dayViewWrapper"));
	var dayContr = new dayController(day);
	
	var addActivity = new addActivityView($("#addActivityView"));
	var addActivityContr = new addActivityController(addActivity);
	
	var main = new mainView($("#mainView"));
	var mainContr = new mainController(main,day,addActivity);

	var activities = new activitiesView($("#activitiesView"));
	var activitiesContr = new activitiesController(activities);
	

});