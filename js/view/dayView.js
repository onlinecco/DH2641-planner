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
			var totalTime = model.days[day].getTotalLength();
			var time = model.days[day]._start;
	
			this.days[day].find(".startTime").html(model.days[day].getStart());
			this.days[day].find(".endTime").html(model.days[day].getEnd());
			this.days[day].find(".totalLength").html(totalTime);
			
			var preTime = 0;
			var groTime = 0;
			var disTime = 0;
			var breTime = 0;

			for(i = 0; i< model.days[day]._activities.length; i++){
				var activity = $("<div>");
	
				activity.attr("id" ,i);
				
				//drag and drop functionality
				activity.attr("draggable","true"); // TODO draggable takes the entire dayView, not only the .schedule view
	
				switch (String(model.days[day]._activities[i].getType())){
					case "Presentation":
						activity.attr("class","row activity presentation");
						preTime += model.days[day]._activities[i].getLength();
						break;
					case "Group Work":
						activity.attr("class","row activity groupwork");
						groTime += model.days[day]._activities[i].getLength();
						break;
					case "Discussion":
						activity.attr("class","row activity discussion");
						disTime += model.days[day]._activities[i].getLength();
						break;
					case "Break":
						activity.attr("class","row activity break");
						breTime += model.days[day]._activities[i].getLength();
						break;
					default:
						activity.attr("class","row activity ");
						break;
				}
	
				var start = time;
				time = time + model.days[day]._activities[i].getLength();
				var hour = Math.floor(start/60);
				if(hour < 10) hour = "0" + hour;
				var min = start % 60;
				if(min < 10) min = "0" + min;
				//start = Math.floor(start/60) + ":" + start % 60;
				start = hour + ":" + min;
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

			var c=this.days[day].find(".graph");
			c.empty();
			var pre = $("<div>");
			pre.attr("class","subGraph graphPre");
			pre.height(preTime * c.height()/ totalTime);

			var gro = $("<div>");
			gro.attr("class","subGraph graphGro");
			gro.height(groTime * c.height()/ totalTime);

			var dis = $("<div>");
			dis.attr("class","subGraph graphDis");
			dis.height(disTime * c.height()/ totalTime);

			var bre = $("<div>");
			bre.attr("class","subGraph graphBre");
			bre.height(breTime * c.height()/ totalTime);

			var breBar = $("<div>");
			breBar.attr("class","graphBre3");
			breBar.height(0.7 * c.height());
			breBar.width(c.width());

			c.append(breBar);
			c.append(pre);
			c.append(gro);
			c.append(dis);
			c.append(bre);


			this.days[day].find(".schedule").append("<div id='empty' class='row emptyactivity'> <div class='col-xs-3'> </div> <div class='col-xs-9 addemptyactivity glyphicon glyphicon-plus-sign'></div> </div>");

		}
		
	}
	this.update(0);

}
