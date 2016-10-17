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
 // внесена реализация "демо" калькулятора.

function isSubmit() {
var calc = {
	'+' : function(a, b) { return a + b; },
	'*' : function(a, b) { return a * b; },	
	'-' : function(a, b) { return a - b; },
	'/' : function(a, b) { return a / b; },
};

function calculate() {
	var mark = array.join('');
	var re = /^(\d+[,|.]?\d*)([+\-*\/])(\d+[,|.]?\d*)$/; //регулярное
	if (mark = re.exec(mark)) {
		var num1 = mark[1] * 1;
		var num2 = mark[3] * 1;
		var op = mark[2];
		var result = calc[op](num1, num2);
		pin.value = result;
		}
			if (result == Infinity) {
			pin.value = "Так нельзя!"
	}
}
calculate()
console.log(array);
document.getElementById('history').innerHTML += "Массив: [" + array + "] \n" 
+ "Высчитать: " + array.join('') + "\n" + "Результат: " + pin.value + '\n' + '\n';

array.splice(0,array.length,pin.value);
}
