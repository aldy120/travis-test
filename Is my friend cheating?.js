function removeNb (n) {
	var output = [];
	var sum = n * (n + 1) / 2;
	for (var j = 0; j <= n; j++) {
  	var i = (sum - j) / (j + 1);
    if (1 <= i && i <= n && Math.floor(i) === i) {
    	output.push([j, i]);
    }
  }

  return output;
}

module.exports = {
  removeNb
}
