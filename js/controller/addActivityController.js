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
		var z = $("#fType").val();
		var q = $("#fDescription").val();
		
		model.addParkedActivity(new Activity(x,y,z,q));
			}
	}
}