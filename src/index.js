module.exports = function towelSort(matrix) {
    if (!matrix) {return []}
    let result = [];
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 === 0) {
            matrix[i].forEach(j =>{
                result.push(j);
            })
        } else {
            matrix[i].reverse().forEach(j => {
                result.push(j);
            })
        }
    }

    return result;
}
