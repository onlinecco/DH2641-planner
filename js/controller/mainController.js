var mainController = function(mainV, dayV, addActivityV){
	
	mainV.addDayButton.click(function(){
		dayV.addDay();
	});
	
	function handleDragStart(e) {
	  this.style.opacity = '0.4';  // this / e.target is the source node.
	  alert("hoi");
	}
	
	var cols = document.querySelectorAll('.activity');
	[].forEach.call(cols, function(col) {
	  col.addEventListener('dragstart', handleDragStart, false);
	});

}