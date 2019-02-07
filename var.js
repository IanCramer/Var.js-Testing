// Returns true if given null or undefined; otherwise returns false.
export const isNotDefined = x => (x === null) || (x === undefined);

// Returns true if given null, undefined or empty string.
export const isEmpty = x => isNotDefined(x) || (x === '');
