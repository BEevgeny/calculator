var array = [];
var pin = document.getElementById('pin');

function foo(num) {
	if (num == undo) {
			array.splice(array.length-1,1);
	pin.value = array.join('');
	} else if (num == cancel) {
	array = [];
	pin.value = '';
	} else {
	array.splice(array.length,0,num.value);
	pin.value += num.value;
	}
}
function isSubmit() {
pin.value = eval(array.join(''));
array.splice(0,array.length,pin.value);
document.getElementById('history').innerHTML += pin.value + '\n';
}
