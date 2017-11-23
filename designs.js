// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
let gridHeight,gridWidth,gridColor;
//绘制作画区域，读取输入的长和宽绘制响应大小表格。
function makeGrid() {
	gridWidth=$('#input_width').val();
	gridHeight=$('#input_height').val();
	// console.log(gridWidth);
	// console.log(gridHeight);
	$('table').empty();
	for(;gridHeight>0;gridHeight--){
		$('table').prepend(`<tr class='${gridHeight}'></tr>`);
	}
	for(let i=gridWidth;i>0;i--){
		$('tr').prepend(`<td class='${i}'></td>`);
	}
}

//点击按钮绘制作画区域。
$('#sizePicker').bind('submit',function(){
	// console.log('点adfadfadfadf击')
	makeGrid();
	return false;
});

//点击绘画区域，将点击的表格背景颜色设置为颜色选择器选择的颜色。
$('#pixel_canvas').on('click','td',function(){
	$(this).css("background",$('#colorPicker').val())
})

// console.log($('#input_height').val())