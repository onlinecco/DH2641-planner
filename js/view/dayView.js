var dayView = function(container){
	
	this.days = [];

	this.addDay = function(){
		container.append("<div id=\"day"+ this.days.length +"\" class=\"container dayView\"></div>");
		this.days.push(container.find("#id"+this.days.length));
		var newDay = this.days[this.days.length-1];

		newDay.append()
	}



}
