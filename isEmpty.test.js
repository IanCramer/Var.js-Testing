// const <Name of Function to Test> = require('./fileName');
const isEmpty = require('./var');

/*
test('Test Name/Description', () =>
{
	Call the function in question in some way (with certain arguements)
	Analyze the result of the function to determine if it performed as expected
});
*/

test('isEmpty, single null/undefuined arguement', () =>
{
	expect(isEmpty(null)).toBe(true);
	expect(isEmpty(undefined)).toBe(true);
});

test('isEmpty, multiple null/undefuined arguements', () =>
{
	expect(isEmpty(null, null)).toBe(true);
	expect(isEmpty(undefined, undefined)).toBe(true);
	expect(isEmpty(null, undefined)).toBe(true);
	expect(isEmpty(undefined, null)).toBe(true);
	expect(isEmpty(null, undefined, null)).toBe(true);
});

test('isEmpty, no arguements', () =>
{
	expect(isEmpty()).toBe(true);
});

test('isEmpty, single defined/value/literal arguement', () =>
{
	// Booleans
	expect(isEmpty(true)).toBe(false);
	expect(isEmpty(false)).toBe(false);

	// Numbers
	expect(isEmpty(0)).toBe(false);
	expect(isEmpty(3)).toBe(false);
	expect(isEmpty(3.5)).toBe(false);
	expect(isEmpty(-3)).toBe(false);

	// Chars and Strings.
	expect(isEmpty('')).toBe(true); // Empty Char is empty
	expect(isEmpty("")).toBe(true); // Empty String is empty
	expect(isEmpty('c')).toBe(false);
	expect(isEmpty("a string")).toBe(false);
});

test('isEmpty, single defined variable arguement', () =>
{
	// Variable declarations
	// Booleans
	var boolTrue = true;
	var boolFalse = false;
	// Numbers
	var int0 = 0;
	var int5 = 5;
	var intNeg = -5;
	var float5 = 5.5;
	// Chars and Strings
	var aChar = 'c';
	var emptyChar = '' 
	var aString = "A string";
	var emptyString = "";

	// Booleans
	expect(isEmpty(boolTrue)).toBe(false);
	expect(isEmpty(boolFalse)).toBe(false);

	// Numbers
	expect(isEmpty(int0)).toBe(false);
	expect(isEmpty(int5)).toBe(false);
	expect(isEmpty(intNeg)).toBe(false);
	expect(isEmpty(float5)).toBe(false);

	// Chars and Strings.
	expect(isEmpty(emptyChar)).toBe(true); // Empty String is empty -> true
	expect(isEmpty(emptyString)).toBe(true); // Empty String is empty -> true
	expect(isEmpty(aChar)).toBe(false);
	expect(isEmpty(aString)).toBe(false);
});

test('isEmpty, single arguement objects', () =>
{
	var array = [1,3,5,9];
	var emptyArray = [];
	var carObject = {make:"Tesla", model:"Roadster", year:2020, miles:2745, founderSeries:false, value:200000}
	var emptyObject = {}

	// Objects
	expect(isEmpty(array)).toBe(false);
	expect(isEmpty(emptyArray)).toBe(false);
	expect(isEmpty(carObject)).toBe(false);
	expect(isEmpty(emptyObject)).toBe(false);
});

test('isEmpty, single arguement undefined variable', () =>
{
	var undefinedVariable;
	expect(isEmpty(undefinedVariable)).toBe(true);
});

test('isEmpty, Multiple Defined/Value/literal arguement. Only first arguement assessed, all others ignored.', () =>
{
	// Booleans
	expect(isEmpty(true, true)).toBe(false);
	expect(isEmpty(false, true)).toBe(false);

	// Numbers
	expect(isEmpty(0, 3, 3.5, -3)).toBe(false);

	// Chars and Strings. First arguement is assessed, all others ignored
	expect(isEmpty("a string", 'c', "Another string", '', "")).toBe(false);
	expect(isEmpty('', "", "started with an empty string")).toBe(true);  // Empty String is empty -> true
});

test('isEmpty, Multiple defined variable arguement. Only first arguement asses, all others ignored.', () =>
{
	// Variable declarations
	// Booleans
	var boolTrue = true;
	var boolFalse = false;
	// Numbers
	var int0 = 0;
	var int5 = 5;
	var intNeg = -5;
	var float5 = 5.5;
	// Chars and Strings
	var aChar = 'c';
	var emptyChar = '' 
	var aString = "A string";
	var emptyString = "";

	// Booleans
	expect(isEmpty(boolTrue, boolFalse)).toBe(false);
	expect(isEmpty(boolFalse, boolTrue)).toBe(false);

	// Numbers
	expect(isEmpty(int0, int5, intNeg, float5)).toBe(false);
	expect(isEmpty(intNeg, float5, int0, int5)).toBe(false);

	// Chars and Strings.
	expect(isEmpty(emptyChar, aString, emptyString, aChar)).toBe(true);
	expect(isEmpty(aString, emptyChar, aChar, emptyString)).toBe(false);
});

test('isEmpty, Multiple arguement objects. Only first arguement assessed, all others ignored.', () =>
{
	var carObject = {make:"Tesla", model:"Roadster", year:2020, miles:2745, founderSeries:false, value:200000}
	var chairObject = {legs:4, material:'Wood'}
	var emptyObject = {}

	// Objects
	expect(isEmpty(carObject, chairObject)).toBe(false);
	expect(isEmpty(emptyObject, carObject)).toBe(false);
});

test('isEmpty, Mulitple arguement undefined variable. Only first arguement assessed, all others ignored.', () =>
{
	var undefinedVariable1;
	var undefinedVariable2;
	expect(isEmpty(undefinedVariable1, undefinedVariable2)).toBe(true);
});

test('isEmpty, Mulitple arguement defined and undefined variables. Only first arguement assessed, all others ignored.', () =>
{
	var definedVariable = 10;
	var undefinedVariable;
	expect(isEmpty(undefinedVariable, definedVariable)).toBe(true);
	expect(isEmpty(definedVariable, undefinedVariable)).toBe(false);
});