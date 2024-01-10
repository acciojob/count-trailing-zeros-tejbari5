function trailingZeros(n) {
  //your JS code here. If required.
	let fact = factorial(n).toString();
	let count = 0;
	for(let i=fact.length - 1 ; i>=0 ; i--){
		if(fact[i] != 0) return count;
		count++;
	}
	return count;
}

function factorial(n){
	if(n==0) return 1;
	return n * factorial(n-1);
}

const input = prompt("Enter a number");
alert(trailingZeros(input));