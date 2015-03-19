var addActivityController = function(view){
	
	this.addListenersForActivity = function(acti,actN,dayN){
		acti.attr("data-toggle","modal");
		acti.attr("data-target","#myModal2");
			var a;
			if(dayN != -1){
				a = model.days[dayN]._activities[actN];
			}else{
				a = model.parkedActivities[actN];
			}
		acti.attr("title",a.getDescription());
		acti.attr("data-placement","bottom");		
		acti.tooltip();
		acti.click(function(){

			$("body").find("#myModal2 #fName").val(a.getName());
			$("body").find("#myModal2 #fLength").val(a.getLength());
			$("body").find("#myModal2 #fType").val(a.getTypeId());
			$("body").find("#myModal2 #fDescription").val(a.getDescription());
			$("body").find("#editActivity").off("click");
			$("body").find("#editActivity").click(function(){

				if (String($("#myModal2 #fName").val()) == ""){
					alert("Please fill in a name");
					return;
				}
				if (isNaN($("#myModal2 #fLength").val()) ){
					alert("Please fill in a number");
					return;
				}
				if ($("#myModal2 #fLength").val() > 999){
					alert("Please enter a number below 1000");
					return;
				}
				a.setName($("body").find("#myModal2 #fName").val());
				a.setLength(parseInt($("#myModal2 #fLength").val()));
				a.setTypeId($("body").find("#myModal2 #fType").val());
				a.setDescription($("body").find("#myModal2 #fDescription").val());
				$("#myModal2").modal('hide');

			});
		})
	}
	// Use onclick for now. Later object.addEventListener("click", myScript); See lecture slides: interaction
	this.addActivityButton = function(){		//this.retrievedform = container.find("#activityForm");
		//alert(this.retrievedform("fName").value);
		if (String($("#myModal #fName").val()) == ""){
			alert("Fill in a name");
		} else { 
		var x = $("#myModal #fName").val();
		var y = $("#myModal #fLength").val();
		if(isNaN(y)) alert("Please enter a number");
		else{
		if(y > 999) alert("Please fill in a time that is less than 1000");
		else{
		var z = $("#myModal #fType").val();
		var q = $("#myModal #fDescription").val();
				$("#myModal").modal('hide');
		model.addParkedActivity(new Activity(x,parseInt(y),z,q));
			
			}}
			}
	}
}