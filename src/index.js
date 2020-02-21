
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (typeof matrix !== 'undefined' || Array.isArray(matrix) && matrix.length !== '0') {
    let lengthMat = matrix.length;
    let result = [];
    let matrixPart;
    for (let i = 0; i < lengthMat; i++) {
      matrixPart = matrix[i];
      if (i % 2 !== 0) {
        result = result.concat(matrixPart.join(',').split(',').sort((a, b) => b - a));
      } else {
        result = result.concat(matrixPart.join(',').split(','));
      }
    }
    return result.map((e) => parseInt(e));
  } else {
    return [];
  }

}
