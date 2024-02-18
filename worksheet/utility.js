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
  return arr.length === arr2.length;

}