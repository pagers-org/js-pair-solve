const grades = [
  [89, 77],
  [76, 82, 81],
  [91, 94, 89, 99],
];
let total = 0;
let average = 0.0;
for (let row = 0; row < grades.length; ++row) {
  for (let col = 0; col < grades[row].length; ++col) {
    total += grades[row][col];
  }
  average = total / grades[row].length;
  print('Student ' + parseInt(row + 1) + ' average: ' + average.toFixed(2));
  total = 0;
  average = 0.0;
}
