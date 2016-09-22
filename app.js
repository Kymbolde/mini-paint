$(document).ready(function() {

var color = 'white'
var colors = 'white red green blue yellow'

$('.box').hover('click', function() {
	$(this).addClass(color);
});

$('.box').on('dblclick', function() {
	$(this).removeClass(colors);
});

$('#reset').on('click', function() {
	$('.box').removeClass(colors);
});

$('#red').hover('click', function() {
	color = 'red';
});

$('#green').hover('click', function() {
	color = 'green';
});

$('#blue').hover('click', function() {
	color = 'blue';
});

$('#yellow').hover('click', function() {
	color = 'yellow';
});

$('#white').hover('click', function() {
	color = 'white';
});


})