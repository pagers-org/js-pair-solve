const grades = [
  [89, 77, 78],
  [76, 82, 81],
  [91, 94, 89],
];
let total = 0;
let average = 0.0;
for (let col = 0; col < grades.length; ++col) {
  for (let row = 0; row < grades[col].length; ++row) {
    total += grades[row][col];
  }

  average = total / grades[col].length;
  print('Test ' + parseInt(col + 1) + ' average: ' + average.toFixed(2));
  total = 0;
  average = 0.0;
}
