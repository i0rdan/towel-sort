
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(typeof matrix != "undefined" && matrix.length != 0) {
		let a = [];
		for (x = 0; x < matrix.length; x++) {
			if(x == 0 || x % 2 == 0) {
				for (y = 0; y < matrix[x].length; y++) {
				a.push(matrix[x][y]);
				}
		}
			else {
				for (y = matrix[x].length-1; y >= 0; y--) {
					a.push(matrix[x][y]);
				}
			}
		}
		return a;
	}
	return [];
}
