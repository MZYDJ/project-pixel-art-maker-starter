// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
let gridHeight,gridWidth,gridColor;
function makeGrid() {
	gridWidth=$('#input_width').val();
	gridHeight=$('#input_height').val();
	// console.log(gridWidth);
	// console.log(gridHeight);
	$('table').empty();
	for(;gridHeight>0;gridHeight--){
		$('table').append(`<tr class='${gridHeight}'></tr>`);
		for(let i=gridWidth;i>0;i--){
			$('tr').eq(-1).append(`<td class='${gridHeight}_${i}'></td>`);
		}
	}
}

$('#sizePicker').bind('submit',function(){
	// console.log('点adfadfadfadf击')
	makeGrid();
	return false;
});

$('#pixel_canvas').on('click','td',function(){
	$(this).css("background",$('#colorPicker').val())
})

// console.log($('#input_height').val())