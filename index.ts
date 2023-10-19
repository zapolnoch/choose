type Conditions = [boolean, JSX.Element][]

/**
 * @returns first element matching a boolean condition
 *
 * @example
 * ```ts
 * choose(
 *   [test === 'blue', <BlueButton />],
 *   [test === 'green', <GreenButton />],
 *   [true, <Button />],
 * )
 * ```
 */
export function choose(...conditions: Conditions): JSX.Element | undefined {
  return conditions.find(([condition]) => condition)?.[1]
}
