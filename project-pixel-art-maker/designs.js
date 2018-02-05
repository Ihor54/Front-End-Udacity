// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

var cols, rows, color, btn, table;
btn = $("#sizePicker");
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

btn.on("submit", function(event){
	event.preventDefault();
	makeGrid();
});

var clicked = false;
table.on("click", "td", function(){
  if (clicked === false){
    $(this).attr("bgcolor", color);
    clicked = true;
  } else{
    $(this).attr("bgcolor", "#FFFFFF");
    clicked = false;
  }
	
});