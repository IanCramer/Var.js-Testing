// const <Name of Function to Test> = require('./fileName');
const isNotDefined = require('./var');

/*
test('Test Name/Description', () =>
{
	Call the function in question in some way (with certain arguements)
	Analyze the result of the function to determine if it performed as expected
});
*/

test('isNotDefined, single null/undefuined arguement', () =>
{
	expect(isNotDefined(null)).toBe(true);
	expect(isNotDefined(undefined)).toBe(true);
});

test('isNotDefined, multiple null/undefuined arguements', () =>
{
	expect(isNotDefined(null, null)).toBe(true);
	expect(isNotDefined(undefined, undefined)).toBe(true);
	expect(isNotDefined(null, undefined)).toBe(true);
	expect(isNotDefined(undefined, null)).toBe(true);
	expect(isNotDefined(null, undefined, null)).toBe(true);
});

test('isNotDefined, no arguements', () =>
{
	expect(isNotDefined()).toBe(true);
});

test('isNotDefined, single defined/value/literal arguement', () =>
{
	// Booleans
	expect(isNotDefined(true)).toBe(false);
	expect(isNotDefined(false)).toBe(false);

	// Numbers
	expect(isNotDefined(0)).toBe(false); // Int 0
	expect(isNotDefined(3)).toBe(false); // Int
	expect(isNotDefined(3.5)).toBe(false); // Float
	expect(isNotDefined(-3)).toBe(false); // Negative

	// Chars and Strings.
	expect(isNotDefined('')).toBe(true); // Empty String is interpreted as Undefined
	expect(isNotDefined("")).toBe(true); // Empty String is interpreted as Undefined
	expect(isNotDefined('c')).toBe(false);
	expect(isNotDefined("a string")).toBe(false);
});

test('isNotDefined, single defined variable arguement', () =>
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
	expect(isNotDefined(boolTrue)).toBe(false);
	expect(isNotDefined(boolFalse)).toBe(false);

	// Numbers
	expect(isNotDefined(int0)).toBe(false); // Int 0
	expect(isNotDefined(int5)).toBe(false); // Int
	expect(isNotDefined(intNeg)).toBe(false); // Float
	expect(isNotDefined(float5)).toBe(false); // Negative

	// Chars and Strings.
	expect(isNotDefined(emptyChar)).toBe(true); // Empty String is interpreted as Undefined
	expect(isNotDefined(emptyString)).toBe(true); // Empty String is interpreted as Undefined
	expect(isNotDefined(aChar)).toBe(false);
	expect(isNotDefined(aString)).toBe(false);
});

test('isNotDefined, single arguement objects', () =>
{
	var array = [1,3,5,9];
	var emptyArray = [];
	var carObject = {make:"Tesla", model:"Roadster", year:2020, miles:2745, founderSeries:false, value:200000}
	var emptyObject = {}

	// Objects
	expect(isNotDefined(array)).toBe(false);
	expect(isNotDefined(emptyArray)).toBe(false);
	expect(isNotDefined(carObject)).toBe(false);
	expect(isNotDefined(emptyObject)).toBe(false);
});

test('isNotDefined, single arguement undefined variable', () =>
{
	var undefinedVariable;
	expect(isNotDefined(undefinedVariable)).toBe(true);
});

test('isNotDefined, Multiple Defined/Value/literal arguement. Only first arguement assessed, all others ignored.', () =>
{
	// Booleans
	expect(isNotDefined(true, true)).toBe(false);
	expect(isNotDefined(false, true)).toBe(false);

	// Numbers
	expect(isNotDefined(0, 3, 3.5, -3)).toBe(false);

	// Chars and Strings. First arguement is assessed, all others ignored
	expect(isNotDefined("a string", 'c', "Another string", '', "")).toBe(false);
	expect(isNotDefined('', "", "started with an empty string")).toBe(true);  // Empty String is interpreted as Undefined
});

test('isNotDefined, Multiple defined variable arguement. Only first arguement asses, all others ignored.', () =>
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
	expect(isNotDefined(boolTrue, boolFalse)).toBe(false);
	expect(isNotDefined(boolFalse, boolTrue)).toBe(false);

	// Numbers
	expect(isNotDefined(int0, int5, intNeg, float5)).toBe(false);
	expect(isNotDefined(intNeg, float5, int0, int5)).toBe(false);

	// Chars and Strings.
	expect(isNotDefined(emptyChar, aString, emptyString, aChar)).toBe(true);
	expect(isNotDefined(aString, emptyChar, aChar, emptyString)).toBe(false);
});

test('isNotDefined, Multiple arguement objects. Only first arguement assessed, all others ignored.', () =>
{
	var carObject = {make:"Tesla", model:"Roadster", year:2020, miles:2745, founderSeries:false, value:200000}
	var chairObject = {legs:4, material:'Wood'}
	var emptyObject = {}

	// Objects
	expect(isNotDefined(carObject, chairObject)).toBe(false);
	expect(isNotDefined(emptyObject, carObject)).toBe(false);
});

test('isNotDefined, Mulitple arguement undefined variable. Only first arguement assessed, all others ignored.', () =>
{
	var undefinedVariable1;
	var undefinedVariable2;
	expect(isNotDefined(undefinedVariable1, undefinedVariable2)).toBe(true);
});

test('isNotDefined, Mulitple arguement defined and undefined variables. Only first arguement assessed, all others ignored.', () =>
{
	var definedVariable = 10;
	var undefinedVariable;
	expect(isNotDefined(undefinedVariable, definedVariable)).toBe(true);
	expect(isNotDefined(definedVariable, undefinedVariable)).toBe(false);
});