/* global console, CustomFunctions */

/**
 * Adds two numbers.
 * @customfunction
 * @param first First number
 * @param second Second number
 * @param {CustomFunctions.Invocation} invocation Invocation Object
 * @returns The sum of the two numbers.
 * @requiresAddress
 */
export function add(first: number, second: number, invocation: CustomFunctions.Invocation): number {
  console.log(invocation);
  return first + second;
}

