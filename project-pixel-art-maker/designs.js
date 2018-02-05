// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

var cols, rows, color, butn, table;
butn = $("#sizePicker");
table = $("#pixelCanvas");

function makeGrid() {
	rows = $("#inputHeight").val();
	cols = $("#inputWeight").val();
	color = $("#colorPicker").val();
	table.children().remove();
	for (var r = 0; r < rows; r++){
		table.append("<tr> </tr>");
		for (var c = 0; c < cols; c++){
			table.find("tr").last().append("<td></td>");
		}
	}
}

butn.on("submit", function(event){
	event.preventDefault();
	makeGrid();
});

var clicked = false;
table.on("mousedown", "td", function(){
	color = $("#colorPicker").val();
  if (clicked === false){
    $(this).attr("bgcolor", color);
    clicked = true;
  } else{
    $(this).attr("bgcolor", "#F5F5F5");
    clicked = false;
  }
	
});