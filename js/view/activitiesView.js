var activitiesView = function(container){
	
	// for each activity in the list of parkedActivities, make a row with length and name of that activity, and make it of the right class (for background color coding)
	for (i = 0; i < model.parkedActivities.length; i++) { 
		//creates a new activity
		var activity = $("<div>");
		
		//presentation = blue; group work = red; discussion = green; break = yellow
		activity.attr("id",i); //depends on position in the list of all added activities (model.id)
		
		switch (model.parkedActivities[i].getTypeId()) {
			case 0:
				activity.attr("class","row activity presentation");
				break;
			case 1:
				activity.attr("class","row activity groupwork");
				break;
			case 2:
				activity.attr("class","row activity discussion");
				break;
			case 3:
				activity.attr("class","row activity break");
				break;
		}
		
		
		this.length = $("<div>"); this.length.attr("id","length"); this.length.attr("class","col-xs-3");
		this.name = $("<div>"); this.name.attr("id","name"); this.name.attr("class","col-xs-9");
	
		//add the elements to the activity div
		activity.append(this.length);
		activity.append(this.name);
		
		//add the div to the view container
		container.append(activity);
		
		//Set the initial values of the components
		this.length.html(model.parkedActivities[i].getLength());		this.length.append(" min");
		this.name.html(model.parkedActivities[i].getName());
	
	}


}