var dayView = function(container){
	
	this.days = [];

	this.addDay = function(){
		container.append(" <div id=\"day1\" class=\"container dayView\"> <div class=\"container info\"> <div class=\"form-horizontal times\"> <div class=\"form-group\"> <label class=\"col-sm-4 control-label\">Start time: <\/label> <div class=\"col-sm-7 col-sm-offset-1\"> <input type=\"text\" class=\"form-control startTime\" placeholder=\"08:00\"> <\/div> <\/div> <div class=\"form-group\"> <label class=\"col-sm-4 control-label\">End time: <span><\/span><\/label> <div class=\"col-sm-6 col-sm-offset-2\"> <label class=\"control-label\">00:00<\/label> <\/div> <\/div> <div class=\"form-group\"> <label class=\"col-sm-4 control-label\">Total length:<\/label> <div class=\"col-sm-6 col-sm-offset-2\"> <label class=\"control-label\">0<\/label><span> min<\/span> <\/div> <\/div> <\/div> <div class=\"container graph\"> <\/div> <\/div> <div class=\"container schedule\"><\/div> <\/div>");
		this.days.push(container.find("#id"+this.days.length));
		var newDay = this.days[this.days.length-1];

		newDay.append()
	}



}
