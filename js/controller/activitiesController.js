var activitiesController = function(view){
		
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
		  
		  //update view
		  
		  //...
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