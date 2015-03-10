var activitiesView = function(container){
	
	// for each activity in the list of parkedActivities, make a row with length and name of that activity, and make it of the right class (for background color coding)
	container.html("");
	for (i = 0; i < model.parkedActivities.length; i++) { 
		//creates a new activity
		var activity = $("<div>");
		
		//presentation = blue; group work = red; discussion = green; break = yellow
		activity.attr("id",i); //depends on position in the list of all added activities (model.id)
		
		//drag and drop functionality
		activity.attr("draggable","true");
		
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
			alert(String(model.parkedActivities[i].getType()));
			
						
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
			this.length.html(model.parkedActivities[i].getLength());		this.length.append(" min");
			this.name.html(model.parkedActivities[i].getName());
			
		}
		
		// drag and drop functionality for the activities (we might need to put this in the maincontroller to allow for cross div DnD)
		
		var dragSrcEl = null;
		
		function handleDragStart(e) {
		  this.style.opacity = '0.4';  // this / e.target is the source node.
		  dragSrcEl = this;

		  e.dataTransfer.effectAllowed = 'move';
		  e.dataTransfer.setData('text/day', null); // TODO parkedActivities
		  e.dataTransfer.setData('text/position', this.getAttribute("id"));
		  
		}
				
		function handleDragOver(e) {
		  if (e.preventDefault) {
			e.preventDefault(); // Necessary. Allows us to drop.
		  }
		
		  e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.
		
		  return false;
		}
		
		function handleDragEnter(e) {
		  // this / e.target is the current hover target.
		  this.classList.add('over');
		}
		
		function handleDragLeave(e) {
		  this.classList.remove('over');  // this / e.target is previous target element.
		}
		
		function handleDrop(e) {
		  // this / e.target is current target element.
			
		  if (e.stopPropagation) {
			e.stopPropagation(); // stops the browser from redirecting.
		  }
		
		  // Don't do anything if dropping the same column we're dragging.
		  if (dragSrcEl != this) {
			  
			// dragSrcEl    gets the day and position where we want to drag to
			// TODO: make work for other than parkedActivities
			
			this.oldposition = e.dataTransfer.getData('text/position');
			this.newposition = this.getAttribute("id");
			this.oldcolumn = e.dataTransfer.getData('text/day');
			this.newcolumn = null; //TODO parkedActivities
			
			model.moveActivity(null, this.oldposition, null, this.newposition); //TODO parkedActivities
			
			//alert("currect sequence in model: \n" + String(model.parkedActivities[0].getName()) + "\n" + String(model.parkedActivities[1].getName())+ "\n" + String(model.parkedActivities[2].getName())+ "\n" + String(model.parkedActivities[3].getName()));
		  }
		  
		
		  return false;
		}
		
		function handleDragEnd(e) {
		  // this/e.target is the source node.
		
		  [].forEach.call(cols, function (col) {
			col.classList.remove('over');
		  });
		  this.style.opacity = '1';
		}
		
		var cols = document.querySelectorAll('.activity');
		[].forEach.call(cols, function(col) {
		  col.addEventListener('dragstart', handleDragStart, false);
		  col.addEventListener('dragenter', handleDragEnter, false)
		  col.addEventListener('dragover', handleDragOver, false);
		  col.addEventListener('dragleave', handleDragLeave, false);
		  col.addEventListener('drop', handleDrop, false);
		  col.addEventListener('dragend', handleDragEnd, false);
		});
	}

}