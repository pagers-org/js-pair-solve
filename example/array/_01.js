Array.matrix = (rows = 1, cols = 1, initial = 0) => {
  let result = [];

  for (let row_index = 0; row_index < rows; ++row_index) {
    let columns = [];
    for (let col_index = 0; col_index < cols; ++col_index) {
      columns[col_index] = initial;
    }

    result[row_index] = columns;
  }

  return result;
};

const nums = Array.matrix(5, 5, 0);
console.log(nums);
