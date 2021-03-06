export function scanLine(from, to, matrix) {
  let total = 0;

  const x = from[0];
  const lengthX = to[0] - from[0];

  const y = from[1];
  const lengthY = to[1] - from[1];

  const precision = Math.max(Math.abs(lengthX), Math.abs(lengthY));

  for (let i = 0; i < precision; i++) {
    const scanX = Math.round(x + (lengthX / precision) * i);
    const scanY = Math.round(y + (lengthY / precision) * i);
    total += matrix[scanX][scanY];
  }

  return Math.round(total / precision);
}
