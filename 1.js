function power (){
	var NUMBER = prompt('Input Number:', 0);
	var POWER = prompt('Input Power(whole number):', 0);

	if (checkIfNull(NUMBER, POWER)){return}
	if (checkIfNull(NUMBER, POWER) === 1 ){return NaN}	
	// START
	return(dark_power(NUMBER, POWER));
	// END
	function dark_power(NUMBER, POWER) {
		// Create variables 'num' and 'pow' that can be modified below 
		var num = NUMBER;
		var pow = POWER;
		
		if (POWER < 0) {
			num = 1 / num;
			// console.log('1/num =' + num);
			pow = -1 * pow;
		}
			
		var rez = num; // rez - rezult that can be returned
		
		for (var i = 1; i < pow; i++){
			rez =  rez * num;
		}
		
		console.log("Number " + NUMBER + " in power " + POWER + " = " + rez);
		console.log("Math.pow (" + NUMBER + "," + POWER + ")  =      " + (Math.pow(NUMBER,POWER)));
		return rez;
	}

	function checkIfNull(NUMBER, POWER){
		if (NUMBER == null || POWER == null){
			console.log('cancel');
			return true;
		}
		if (NUMBER == 0 ){
			console.log('0*0 = 0');
			return true;
		}
		if (POWER == 0){
			console.log("Number " + NUMBER + " in power " + POWER + " = 1");
			return true;
		}
		if ( (NUMBER < 0) & (POWER < 0) ){
			console.log("Number " + NUMBER + " in power " + POWER + " = NaN");
			return 1;
		}
		if (POWER > 0 & POWER < 1 || NUMBER > 0 & NUMBER < 1){
			console.log('0 > input < 1'); // not treated
			return true;
		}
	}
}

power();