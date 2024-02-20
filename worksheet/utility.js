/**
 * The subtract function is complete and ready for use.
 */
export function subtract(a, b) {
  return a - b;
}

/**
 * To make the add function available for import to other
 * programs it must be exported, so prepend the word
 * "export" to the function definition (as seen in the
 * subtract example above)
 */
export function add(a, b) {
  return a + b;
}

export function compare(arr, arr2) {
  if (arr.length !== arr2.length) return false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr2[i]) return false;
  }
  return true;
}

export function largest(arr) {
  return Math.max(...arr);
}

export function zeroest(arr) {
  let current = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < current && arr[i] >= 0) 
      current = arr[i];
  }
  return current;
}
