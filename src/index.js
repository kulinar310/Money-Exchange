// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {

	if (currency > 10000) {
		return {error: "You are rich, my friend! We don't have so much coins for exchange"};
	} else if(currency < 0){
		return {};
	}

	var object = {};

	var H = Math.floor(currency / 50);
	if(H){
		object.H = H;
	}
	var currency = currency % 50;


	var Q = Math.floor(currency / 25);
	if(Q) {
		object.Q = Q;
	}
	var currency = currency % 25;


	var D = Math.floor(currency / 10);
	if(D){
		object.D = D;
	} 
	var currency = currency % 10;


	var N = Math.floor(currency / 5);
	if(N) {
		object.N = N;
	}
	var currency = currency % 5;


	var P = Math.floor(currency / 1);
	if(P > 0) {
		object.P = P;
	}
	var currency = currency % 1;


	return object;
}
