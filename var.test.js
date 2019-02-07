// const <Name of Function to Test> = require('./fileName');
const isNotDefined = require('./var');
const isEmpty = require('./var');

/*
test('Test Name/Description', () =>
{
	Call the function in question in some way (with certain arguements)
	Analyze the result of the function to determine if it performed as expected
});
*/

test('isNotDefined, single null/undefuined parameter', () =>
{
	expect(isNotDefined(null)).toBe(true);
	expect(isNotDefined(undefined)).toBe(true);
});