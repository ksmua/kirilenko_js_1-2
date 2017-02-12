var names = [];
var input;
var flag = false;

for (var i = 0; i < 5; i++ ){
	input = prompt('Input Name # ' + (i + 1) );
	if (input) {
		names.push(input);
	} else {
		flag = true;
		break;
	}
}

// but beter this construction:
// do {
// 	input = prompt('Input new Name:');
// 	if (input) {
// 		names.push(input);
// 	}
// } while (input != null);

// for (i = 0; i < names.length; i++){
// 	console.log("name " + i + " = " + names[i]);
// }

if (flag) {
	alert("Error: unknown user. Reload page and try again.");
} else {
	input = prompt("======== Pleas, input your Name =========");
	flag = false;
	
	for (var i = 0; i < 5; i++){
		if (input == names[i]){
			flag = true;
			break;
		} 
	}
	
	if (flag) {
		alert(input + ", you have successfully logged.");
	} else{
			alert ("Error: unknown user. Reload page and try again.");
	}
}