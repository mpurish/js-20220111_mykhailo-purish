/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  if (size === 0) return '';
  if (size === undefined) return string;

  const firstSlice = string.slice(0, size);
  const restSlice = [...string.slice(size)];

  return restSlice.reduce((sum, current) => {
    if (!sum.endsWith(current.repeat(size))) {
      sum += current;
    }
    return sum;
  }, firstSlice);
}
