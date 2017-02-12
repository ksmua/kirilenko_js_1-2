// alert('helo');
function powwer (){
	var NUMBER = prompt('Input Number:', 0);
	var POWWER = prompt('Input Powwer(whole number):', 0);
	
	if (NUMBER == null || POWWER == null){
		console.log('cancel');
		return;
	}
	
	if (NUMBER == 0 ){
		console.log('0*0 = 0');
		return;
	}
	
	if (POWWER == 0){
		console.log("Number " + NUMBER + " in powwer " + POWWER + " = 1");
		return;
	}
	// Create variables 'num' and 'pow' that can be modified below 
	var num = NUMBER;
	var pow = POWWER;
	
	if ( (NUMBER < 0) & (POWWER < 0) ){
		console.log("Number " + NUMBER + " in powwer " + POWWER + " = NaN");
		return NaN;
	}
	
	if (POWWER < 0) {
		num = 1 / num;
		// console.log('1/num =' + num);
		pow = -1 * pow;
	}
	
	if (POWWER > 0 & POWWER < 1 || NUMBER > 0 & NUMBER < 1)  {
		console.log('0 > input < 1')
	}
	// rez - rezult that can be returned
	var rez = num;
	
	for (var i = 1; i < pow; i++) {
		rez =  rez * num;
		// console.log('i = ' + i);
		// console.log('rez = ' + rez);
	}
	
	console.log("Number " + NUMBER + " in powwer " + POWWER + " = " + rez);
	console.log("Math.pow (" + NUMBER + "," + POWWER + ")  =      " + (Math.pow(NUMBER,POWWER)));
}


powwer();