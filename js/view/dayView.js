var dayView = function(container){
	
	this.days = [];

	model.addObserver(this);

	this.addDay = function(){
		container.append(" <div id=\"day"+ this.days.length+"\" class=\"container dayView\"> <div class=\"container info\"> <div class=\"form-horizontal times\"> <div class=\"form-group\"> <label class=\"col-sm-4 control-label\">Start time: <\/label> <div class=\"col-sm-7 col-sm-offset-1\"> <input type=\"text\" class=\"form-control startTime\" placeholder=\"08:00\"> <\/div> <\/div> <div class=\"form-group\"> <label class=\"col-sm-4 control-label\">End time: <span><\/span><\/label> <div class=\"col-sm-6 col-sm-offset-2\"> <label class=\"control-label endTime\">00:00<\/label> <\/div> <\/div> <div class=\"form-group\"> <label class=\"col-sm-4 control-label\">Total length:<\/label> <div class=\"col-sm-6 col-sm-offset-2\"> <label class=\"control-label totalLength\">0<\/label><span> min<\/span> <\/div> <\/div> <\/div> <div class=\"container graph\"> <\/div> <\/div> <div class=\"container schedule\"><\/div> <\/div>");
		this.days.push(container.find("#day"+this.days.length));
		var newDay = this.days[this.days.length-1];

		newDay.append()
	}

	this.addDay();


	this.update = function(arg){
		
		// clear all the schedule containers
		this.schedules = container.find(".schedule");
		this.schedules.html("");

		//refill the schedule container
		
		for(day = 0; day< model.days.length; day++){
			
			//refill the day
			
			var time = model.days[day]._start;
	
			this.days[day].find(".startTime").html(model.days[day].getStart());
			this.days[day].find(".endTime").html(model.days[day].getEnd());
			this.days[day].find(".totalLength").html(model.days[day].getTotalLength());
			
			for(i = 0; i< model.days[day]._activities.length; i++){
				var activity = $("<div>");
	
				activity.attr("id" ,i);
				
				//drag and drop functionality
				activity.attr("draggable","true");
	
				switch (String(model.days[day]._activities[i].getType())){
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
	
				var start = time;
				time = time + model.days[day]._activities[i].getLength();
				start = Math.floor(start/60) + ":" + start % 60;
				var start_time = $("<div>"); 
				start_time.attr("id","start_time"); 
				start_time.attr("class","col-xs-3");
				start_time.html(start);
	
				var name = $("<div>"); 
				name.attr("id","name"); 
				name.attr("class","col-xs-9");
	
				name.html(model.days[day]._activities[i].getName());
	
				activity.append(start_time);
				activity.append(name);
	
				this.days[day].find(".schedule").append(activity);
	
			}

		}
	}

	this.update(0);

}
