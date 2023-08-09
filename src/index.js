
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!matrix) {
    return []
  }
  let output = []
  for(let i = 0; i < matrix.length; i++) {
    if(i % 2 === 0) {
      output.push(matrix[i])
    } else {
      output.push(matrix[i].reverse())
    }
  }

  return output.flat();
}
