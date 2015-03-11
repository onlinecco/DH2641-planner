var activitiesController = function(view){
	
	// make all divs with the class activity draggable
	
	/*****************************************  
	      Observer implementation    
	*****************************************/
	
	//Register an observer to the model
	model.addObserver(this);
	
	//This function gets called when there is a change at the model
	this.update = function(arg){	
		// drag and drop functionality for the activities
		
		var dragSrcEl = null;
		
		function handleDragStart(e) {
		  this.style.opacity = '0.4';  // this / e.target is the source node.
		  dragSrcEl = this;

		  e.dataTransfer.effectAllowed = 'move';
		  
		  
		  
		  if (this.parentNode.id == "activitiesView") { // if parent is activitiesView, set to null
				e.dataTransfer.setData('text/day', "parked");
		  } else if (this.parentNode.parentNode.parentNode.id == "dayViewWrapper") { // if parent is dayViewWrapper, set to id minus "day"
			  	this.daynumber = this.parentNode.parentNode.id.substring(3);
			  	e.dataTransfer.setData('text/day', parseInt(this.daynumber));
		  }
		  
		  e.dataTransfer.setData('text/position', this.getAttribute("id")); // gets position in list
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
			
			this.oldcolumn = e.dataTransfer.getData('text/day');
			
			if (this.parentNode.id == "activitiesView") { // if parent is activitiesView, set to null
				this.newcolumn = "parked";
		  	} else if (this.parentNode.parentNode.parentNode.id == "dayViewWrapper") { // if parent is dayViewWrapper, set to id minus "day"
			  	this.daynumber = this.parentNode.parentNode.id.substring(3);
			  	this.newcolumn = parseInt(this.daynumber);
		  	}
			
			this.oldposition = e.dataTransfer.getData('text/position');
			this.newposition = this.getAttribute("id"); 
			
			if (this.newposition == "empty") {
				if(this.newcolumn == "parked") {
					// make this.newposition to position last (+1 ??) of the parkedactivities
					this.newposition = model.parkedActivities.length;
				} else {
					// make this.newposition to position last (+1 ??)
					this.newposition = model.days[this.newcolumn]._activities.length +1;
				}				
			}
			
			if(this.oldcolumn == "parked" && this.newcolumn == "parked") {
				model.moveActivity(null, this.oldposition, null, this.newposition);
			}else if(this.oldcolumn !== "parked" && this.newcolumn == "parked") {
				model.moveActivity(this.oldcolumn, this.oldposition, null, this.newposition);
			}else if(this.oldcolumn == "parked" && this.newcolumn !== "parked") {
				model.moveActivity(null, this.oldposition, this.newcolumn, this.newposition);
			}else if(this.oldcolumn !== "parked" && this.newcolumn !== "parked") {
				model.moveActivity(this.oldcolumn, this.oldposition, this.newcolumn, this.newposition);
			} else {
				alert("fail");
			}
			
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
		
		//TODO here we make the empty col dragoverable, not draggable
		var emptyacts = document.querySelectorAll('.emptyactivity');
		[].forEach.call(emptyacts, function(emptyact) {
		  emptyact.addEventListener('dragenter', handleDragEnter, false)
		  emptyact.addEventListener('dragover', handleDragOver, false);
		  emptyact.addEventListener('dragleave', handleDragLeave, false);
		  emptyact.addEventListener('drop', handleDrop, false);
		  emptyact.addEventListener('dragend', handleDragEnd, false);
		});
		
	}
	this.update(1);
		
		
}