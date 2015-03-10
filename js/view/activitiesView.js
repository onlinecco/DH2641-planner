var activitiesView = function(container){
	
	// for each activity in the list of parkedActivities, make a row with length and name of that activity, and make it of the right class (for background color coding)

	
	/*****************************************  
	      Observer implementation    
	*****************************************/
	
	//Register an observer to the model
	model.addObserver(this);
	
	//This function gets called when there is a change at the model
	this.update = function(arg){	
		container.html("");

		for (i = 0; i < model.parkedActivities.length; i++) { 
			//creates a new activity
			var activity = $("<div>");
			
			//presentation = blue; group work = red; discussion = green; break = yellow
			activity.attr("id",i); //depends on position in the list of all added activities (model.id)
			
			//drag and drop functionality
			activity.attr("draggable","true");
			
			switch (String(model.parkedActivities[i].getType())) {
				case "Presentation":
					activity.attr("class","row activity presentation");
					break;
				case "Group Work":
					activity.attr("class","row activity groupwork");
					break;
				case "Discussion":
					activity.attr("class","row activity discussion");
					break;
				case "Break":
					activity.attr("class","row activity break");
					break;
				default:
					activity.attr("class","row activity ");
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
			this.length.html(model.parkedActivities[i].getLength());		
			this.length.append(" min");
			this.name.html(model.parkedActivities[i].getName());
			
		}
		
	}
	this.update(0);

}