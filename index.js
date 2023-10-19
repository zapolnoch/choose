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
export function choose(...conditions) {
    var _a;
    return (_a = conditions.find(([condition]) => condition)) === null || _a === void 0 ? void 0 : _a[1];
}
