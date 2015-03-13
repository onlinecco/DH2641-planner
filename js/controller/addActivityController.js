var addActivityController = function(view){
	
	// Use onclick for now. Later object.addEventListener("click", myScript); See lecture slides: interaction
	this.addActivityButton = function(){		//this.retrievedform = container.find("#activityForm");
		//alert(this.retrievedform("fName").value);
		if (String($("#fName").val()) == ""){
			alert("Fill in a name");
		} else { 
		$("#myModal").modal('hide');
		var x = $("#fName").val();
		var y = $("#fLength").val();
		if(isNaN(y)) alert("Please enter a number");
		else{
		if(y > 999) alert("Please fill in a time that is less than 1000");
		else{
		var z = $("#fType").val();
		var q = $("#fDescription").val();
		model.addParkedActivity(new Activity(x,y,z,q));
			
			}}
			}
	}
}