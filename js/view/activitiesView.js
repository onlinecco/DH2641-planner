var activitiesView = function(container){
	
	//creates a new activity
	var activity = $("<div>");
	
	//presentation = blue; group work = red; discussion = green; break = yellow
	activity.attr("id","1"); //depends on position in the list of all added activities (model.id)
	activity.attr("class","row activity presentation"); // depends on type of activity (model.id.type)
	
	this.length = $("<div>");
	this.length.attr("id","length");
	this.length.attr("class","col-xs-3");
	
	this.name = $("<div>");
	this.name.attr("id","name");
	this.name.attr("class","col-xs-9");

	//add the elements to the activity div
	activity.append(this.length);
	activity.append(this.name);
	
	//add the div to the view container
	container.append(activity);
	
	//Set the initial values of the components
	this.length.html("length");
	this.name.html("name");




	//second activity
	//creates a new activity
	var activity = $("<div>");
	
	//presentation = blue; group work = red; discussion = green; break = yellow
	activity.attr("id","1"); //depends on position in the list of all added activities (model.id)
	activity.attr("class","row activity groupwork"); // depends on type of activity (model.id.type)
	
	this.length = $("<div>");
	this.length.attr("id","length");
	this.length.attr("class","col-xs-3");
	
	this.name = $("<div>");
	this.name.attr("id","name");
	this.name.attr("class","col-xs-9");

	//add the elements to the activity div
	activity.append(this.length);
	activity.append(this.name);
	
	//add the div to the view container
	container.append(activity);
	
	//Set the initial values of the components
	this.length.html("10:00");
	this.name.html("group work");
	
	
	//third activity
	//creates a new activity
	var activity = $("<div>");
	
	//presentation = blue; group work = red; discussion = green; break = yellow
	activity.attr("id","1"); //depends on position in the list of all added activities (model.id)
	activity.attr("class","row activity discussion"); // depends on type of activity (model.id.type)
	
	this.length = $("<div>");
	this.length.attr("id","length");
	this.length.attr("class","col-xs-3");
	
	this.name = $("<div>");
	this.name.attr("id","name");
	this.name.attr("class","col-xs-9");

	//add the elements to the activity div
	activity.append(this.length);
	activity.append(this.name);
	
	//add the div to the view container
	container.append(activity);
	
	//Set the initial values of the components
	this.length.html("15:00");
	this.name.html("discussion");
	
	
	
	//fourth activity
	//creates a new activity
	var activity = $("<div>");
	
	//presentation = blue; group work = red; discussion = green; break = yellow
	activity.attr("id","1"); //depends on position in the list of all added activities (model.id)
	activity.attr("class","row activity break"); // depends on type of activity (model.id.type)
	
	this.length = $("<div>");
	this.length.attr("id","length");
	this.length.attr("class","col-xs-3");
	
	this.name = $("<div>");
	this.name.attr("id","name");
	this.name.attr("class","col-xs-9");

	//add the elements to the activity div
	activity.append(this.length);
	activity.append(this.name);
	
	//add the div to the view container
	container.append(activity);
	
	//Set the initial values of the components
	this.length.html("30:00");
	this.name.html("break");
}